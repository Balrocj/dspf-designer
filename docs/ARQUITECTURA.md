# DSPF Designer - Documentación de Arquitectura

## 📋 Índice
1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Arquitectura Modular](#arquitectura-modular)
4. [Componentes Principales](#componentes-principales)
5. [Flujo de Datos](#flujo-de-datos)
6. [Módulos Detallados](#módulos-detallados)
7. [Funcionalidades Avanzadas](#funcionalidades-avanzadas)
8. [Estructura de Datos](#estructura-de-datos)
9. [Flujo de Parsing DDS](#flujo-de-parsing-dds)
10. [Flujo de Generación DDS](#flujo-de-generación-dds)
11. [Guía de Desarrollo](#guía-de-desarrollo)

---

## Descripción General

**DSPF Designer** es una extensión de Visual Studio Code que permite diseñar pantallas IBM i (Display Files - DSPF) de forma visual mediante un editor drag-and-drop.

### Características Principales
- ✅ Editor visual con drag-and-drop
- ✅ Soporte para múltiples tamaños de pantalla (DS3: 24×80, DS4: 27×132)
- ✅ Tres vistas: Designer, Preview y Source (código fuente)
- ✅ Generación automática de código DDS
- ✅ Soporte para tipos de campo fecha/hora/timestamp (`L`, `T`, `Z`)
- ✅ Edición de atributos (COLOR, DSPATR, CHECK, DFTVAL)
- ✅ Soporte para indicadores con lógica OR/AND
- ✅ Manejo de campos WINDOW con soporte DS3/DS4 independiente
- ✅ Soporte para Subfiles (SFL/SFLCTL) con repetición visual
- ✅ Vista previa en tiempo real con renderizado auténtico estilo 5250
- ✅ Integración con archivos en IBM i (IFS y miembros source)

---

## Estructura del Proyecto

```
dspf-designer/
├── src/
│   ├── extension.ts            # Punto de entrada de la extensión
│   └── dspfEditorProvider.ts   # Proveedor del editor personalizado (webview)
├── media/
│   ├── dspfDesigner.js         # Orquestador principal del webview (~4900 líneas aún en proceso de modularización)
│   ├── dspfDesigner.css        # Estilos del webview
│   └── modules/                # Módulos separados (bundleados por webpack)
│       ├── core/
│       │   ├── logger.js       # Sistema de logging con categorías
│       │   └── ddsConstants.js # Constantes DDS compartidas
│       ├── ui/                 # Lógica de interfaz de usuario (73 módulos)
│       │   ├── parseDdsTypeSpecification.js
│       │   ├── applyFieldProperties.js
│       │   ├── showFieldProperties.js
│       │   ├── buildVariableTypeAndUsage.js
│       │   ├── generateDdsLineWithIndicators.js
│       │   ├── renderField.js
│       │   ├── dragAndDrop.js
│       │   ├── parseWindowDimensionsFromLine.js
│       │   └── ... (65 módulos adicionales)
│       └── utils/              # Utilidades puras sin dependencias DOM
│           ├── indicatorUtils.js
│           ├── colorUtils.js
│           ├── screenCoordinates.js
│           ├── displaySizeUtils.js
│           ├── fieldNameValidator.js
│           ├── idGenerator.js
│           └── charMetrics.js
├── docs/
│   ├── ARQUITECTURA.md
│   ├── INDICATORS_KEYWORD_FLOW.md
│   ├── OPTIMIZACIONES_RECOMENDADAS.md
│   ├── RECOMENDACIONES_UNIFICACION.md
│   └── rendering-analysis.md
├── package.json                # Configuración de la extensión y comandos
├── tsconfig.json               # Configuración TypeScript
├── webpack.config.js           # Bundling del webview y extensión
└── README.md
```

---

## Arquitectura Modular

### Modelo de Bundling

El proyecto usa **Webpack** para generar dos bundles independientes:

| Bundle | Entrada | Destino | Propósito |
|--------|---------|---------|-----------|
| `extension.js` | `src/extension.ts` | VS Code runtime (Node.js) | Registro de comandos y proveedores |
| `dspfDesigner.bundle.js` | `media/dspfDesigner.js` | Webview (browser) | Todo el editor visual |

```
src/extension.ts
src/dspfEditorProvider.ts
        ↓ webpack (target: node)
    extension.js

media/dspfDesigner.js
media/modules/**/*.js
        ↓ webpack (target: web)
  dspfDesigner.bundle.js
```

### División de Responsabilidades

```
┌─────────────────────────────────────────────────────────┐
│                    VS Code (Node.js)                    │
│  extension.ts         Comandos, ciclo de vida           │
│  dspfEditorProvider   Webview HTML, mensajes I/O        │
└────────────────────────┬────────────────────────────────┘
                         │  postMessage / onDidReceiveMessage
┌────────────────────────▼────────────────────────────────┐
│                    Webview (Browser)                    │
│  dspfDesigner.js      Orquestador, estado global        │
│  ├── modules/core/    Logger, constantes                │
│  ├── modules/ui/      UI, parsing, generación, render   │
│  └── modules/utils/   Utilidades puras reutilizables    │
└─────────────────────────────────────────────────────────┘
```

---

## Componentes Principales

### 1. **extension.ts** (TypeScript - Node.js)

Punto de entrada de la extensión.

**Responsabilidades:**
- Registrar el proveedor de editor personalizado (`dspfDesigner.editor`)
- Registrar comandos VS Code:
  - `dspf-designer.openDesigner` — Abre el editor visual (alterna a "Exit Designer" cuando ya está activo)
  - `dspf-designer.exitDesigner` — Regresa al editor de texto
  - `dspf-designer.newDspfFile` — Crea nuevo archivo DSPF
- Establecer contexto de VS Code (`dspfDesignerActive`) para condiciones de menú
- Relaying de mensajes entre webview y sistema de archivos

**Condiciones de menú (`package.json`):**
```json
"when": "resourceExtname == .dspf || resourceLangId == dspf"
```
Esto asegura que los botones de la barra de título aparezcan tanto en archivos locales como en miembros IBM i.

---

### 2. **dspfEditorProvider.ts** (TypeScript - Node.js)

Implementa `vscode.CustomTextEditorProvider`.

**Responsabilidades:**
- Crear e inyectar el HTML del webview
- Leer el contenido del archivo y enviarlo al webview
- Recibir el contenido modificado y escribirlo al archivo
- Manejar la comunicación bidireccional (`postMessage`)

---

### 3. **dspfDesigner.js** (JavaScript - Webview)

Orquestador principal. Contiene el estado global y coordina todos los módulos.

**~4900 líneas — estado global:**
```javascript
let currentDocument = "";       // Contenido DDS actual
let currentRecord = "";         // Record activo
let currentDisplaySize = "DS3"; // Tamaño de pantalla activo
let fields = [];                 // Campos parseados
let selectedField = null;        // Campo seleccionado
let isReadOnly = false;          // Modo solo lectura
```

**Funciones orquestadoras clave:**
- `parseDspfFields(content)` — Parsea el DDS y renderiza en canvas
- `parseDspfForPreview(content)` — Parsea para la vista Preview
- `initializeDesigner()` — Inicialización al cargar
- `switchToView(view)` — Cambia entre Designer/Preview/Source

---

## Flujo de Datos

### 📥 Lectura del Archivo

```
Usuario abre archivo .dspf
    ↓
extension.ts detecta extensión/language
    ↓
dspfEditorProvider crea webview con dspfDesigner.bundle.js
    ↓
Webview envía mensaje 'ready'
    ↓
extension.ts lee archivo y envía mensaje 'fileContent'
    ↓
displaySizeUtils detecta DSPSIZ disponibles
    ↓
parseDspfFields() parsea el DDS del record activo
    ↓
Campos renderizados en canvas (Designer)
```

### 🔄 Edición en Designer

```
Usuario arrastra campo
    ↓
dragAndDrop.js actualiza field.row / field.col
    ↓
updateFieldInDds() regenera línea DDS en currentDocument
    ↓
updateDocumentInEditor() notifica a VS Code
    ↓
updateSourceView() sincroniza vista de código

Usuario aplica propiedades (Apply Changes)
    ↓
applyFieldProperties.js calcula cambios (shouldUpdateDds)
    ↓
generateDdsLine() + generateField*Lines()
    ↓
findFieldBlockInDds() localiza el bloque a reemplazar
    ↓
currentDocument actualizado → webview → extension.ts → archivo
```

### 📤 Guardado

```
Usuario guarda (Ctrl+S)
    ↓
saveDocument.js envía mensaje 'save' con currentDocument
    ↓
extension.ts escribe archivo mediante WorkspaceEdit
```

---

## Módulos Detallados

### `modules/core/`

| Módulo | Descripción |
|--------|-------------|
| `logger.js` | Logging categorizado con emojis (parse, dds, window, ui, etc.) |
| `ddsConstants.js` | Constantes compartidas (longitudes de columnas DDS, etc.) |

### `modules/utils/` — Utilidades puras

| Módulo | Descripción |
|--------|-------------|
| `indicatorUtils.js` | Parseo y formateo de indicadores IBM i (01-99, N prefix, OR/AND) |
| `colorUtils.js` | Mapeo colores IBM i → hex (`WHT`, `BLU`, `RED`, `TRQ`, `YLW`, `GRN`, `PNK`) |
| `screenCoordinates.js` | Conversión fila/columna ↔ píxeles para DS3 y DS4 |
| `displaySizeUtils.js` | Detección de tamaños disponibles desde `DSPSIZ(...)` (incluyendo multilínea) |
| `fieldNameValidator.js` | Validación de nombres de campo según reglas IBM i (≤10 chars, etc.) |
| `idGenerator.js` | Generación de IDs únicos para campos y elementos |
| `charMetrics.js` | Métricas de caracteres para cálculos de ancho en pantalla |

### `modules/ui/` — Interfaz de usuario (73 módulos)

#### Parsing
| Módulo | Descripción |
|--------|-------------|
| `parseDdsTypeSpecification.js` | Parsea el spec de tipo de campo (`10A`, `5P 2`, `L`, `T`, `Z`, etc.) |
| `parseUsageAndDecimals.js` | Extrae uso (I/O/B/H/M/N/P) y decimales |
| `parseWindowDimensionsFromLine.js` | Extrae dimensiones `WINDOW(...)` diferenciando `*DS3`/`*DS4` |
| `extractRowColFromParts.js` | Extrae fila/columna incluyendo formato compacto (3 dígitos sin espacio) |
| `extractAttributes.js` | Extrae DSPATR/COLOR/CHECK/DFTVAL de líneas de atributo |
| `extractShiftCode.js` | Extrae el shift code del campo |
| `extractFloatPrecision.js` | Extrae precisión de campos float (F) |
| `processMultiLineContinuation.js` | Une líneas de constantes con continuación (`-`/`+`) |
| `scanAttributeLinesAfterField.js` | Escanea líneas de atributos posteriores al campo |
| `scanIndicatorsBackward.js` | Escanea indicadores OR/AND hacia atrás |

#### Generación DDS
| Módulo | Descripción |
|--------|-------------|
| `buildVariableTypeAndUsage.js` | Construye spec de tipo (`10A O`, `L`, `Z`, etc.) |
| `generateDdsLineWithIndicators.js` | Genera línea(s) DDS con soporte OR (`A`/`AO`) |
| `generateConstantFieldLines.js` | Genera líneas para constantes (posiblemente multi-línea) |
| `generateFieldDspatrLines.js` | Genera líneas `DSPATR(...)` con indicadores |
| `generateFieldColorLines.js` | Genera líneas `COLOR(...)` con indicadores |
| `generateFieldCheckLines.js` | Genera líneas `CHECK(...)` con indicadores |
| `generateFieldDftvalLines.js` | Genera líneas `DFTVAL(...)` con indicadores |

#### Propiedades y UI
| Módulo | Descripción |
|--------|-------------|
| `showFieldProperties.js` | Renderiza el panel de propiedades (Basic/Attributes/Colors) con soporte L/T/Z |
| `applyFieldProperties.js` | Aplica cambios del panel al campo y decide si actualizar DDS |
| `applyWindowDimensions.js` | Aplica cambios de dimensiones WINDOW al DDS |
| `applyColorChanges.js` | Aplica cambios de color al campo |
| `applyAttributeClasses.js` | Aplica clases CSS de atributos al elemento HTML |
| `applyIndicatorChangesToField.js` | Transfiere indicadores del modal al campo |
| `showScreenProperties.js` | Panel de propiedades de pantalla/record |
| `propertiesTabs.js` | Gestión de pestañas del panel de propiedades |

#### Renderizado
| Módulo | Descripción |
|--------|-------------|
| `renderField.js` | Renderiza un campo en el canvas |
| `renderWindowField.js` | Renderiza campo dentro de una WINDOW |
| `generateWindowFieldHtml.js` | Genera HTML para campos de ventana |
| `computeFieldDisplay.js` | Calcula atributos visuales del campo |
| `getFieldDisplayText.js` | Obtiene texto de visualización (con placeholders para L/T/Z) |
| `getFieldCharForDisplay.js` | Obtiene char de uso (I/O/B → 3/6/9) |
| `setFieldContent.js` | Establece contenido HTML del campo |
| `setupFieldElement.js` | Configura element DOM del campo |

#### Campos y Manipulación
| Módulo | Descripción |
|--------|-------------|
| `createField.js` | Crea nuevo campo desde toolbox |
| `editField.js` | Edita campo existente |
| `moveField.js` | Mueve campo en el canvas (drag) |
| `selectField.js` | Selecciona campo y muestra propiedades |
| `deselectAllFields.js` | Deselecciona todos los campos |
| `deleteConfirmation.js` | Diálogo de confirmación de eliminación |
| `getDefaultLength.js` | Longitud por defecto según tipo de campo |

#### Vistas
| Módulo | Descripción |
|--------|-------------|
| `switchToView.js` | Alterna entre Designer/Preview/Source |
| `previewView.js` | Lógica de la vista Preview |
| `sourceView.js` | Lógica de la vista Source (código DDS) |
| `sourceSearch.js` | Búsqueda en vista Source (Ctrl+F) |
| `scrollToRecordInSource.js` | Scroll automático al record en Source |
| `setViewZoom.js` | Configura zoom por vista (Designer DS4=70%, Preview=100%) |
| `previewDisplaySizeListeners.js` | Listeners de radios DS3/DS4 en Preview |
| `displaySizeSelector.js` | Lógica de selección y habilitación de tamaños |

#### Subfiles y Records
| Módulo | Descripción |
|--------|-------------|
| `subfileControl.js` | Gestión de relaciones SFL/SFLCTL |
| `getSflpagValue.js` | Obtiene valor SFLPAG del record |
| `recordNavigation.js` | Navegación entre records |
| `navigation.js` | Navegación general de la UI |
| `getRecordType.js` | Determina tipo de record (SFL/SFLCTL/WINDOW/normal) |

#### Indicadores y Keywords
| Módulo | Descripción |
|--------|-------------|
| `indicatorButtons.js` | Botones de indicadores en panel de propiedades |
| `setIndicatorButtonState.js` | Estado visual de botones de indicadores |
| `formatIndicatorLabel.js` | Formato de etiquetas de indicadores |
| `getAttributeCheckboxMap.js` | Mapa de checkboxes de atributos |
| `getKeywordDisplay.js` | Display de keywords especiales |
| `functionKeys.js` | Manejo de teclas de función (CA/CF) |

#### Canvas y Layout
| Módulo | Descripción |
|--------|-------------|
| `canvasSetup.js` | Inicialización del canvas |
| `canvasSize.js` | Dimensiones del canvas según DS3/DS4 |
| `gridLines.js` | Líneas de cuadrícula del canvas |
| `rulers.js` | Reglas de filas/columnas |
| `windowResize.js` | Resize de WINDOW mediante handles |
| `dragAndDrop.js` | Sistema de drag-and-drop |

#### Persistencia y Notificaciones
| Módulo | Descripción |
|--------|-------------|
| `saveDocument.js` | Envía documento modificado a extension.ts |
| `updateDocumentInEditor.js` | Actualiza el documento en VS Code |
| `updateReadOnlyMode.js` | Gestiona modo solo lectura |
| `showNotification.js` | Notificaciones al usuario |
| `toolbarSetup.js` | Configuración de la barra de herramientas |

---

## Funcionalidades Avanzadas

### 🖥️ Soporte Multi-Tamaño (DS3/DS4)

- **DS3:** 24 filas × 80 columnas
- **DS4:** 27 filas × 132 columnas

```javascript
// displaySizeUtils detecta DSPSIZ (incluyendo bloques multilínea):
// DSPSIZ(*DS3 *DS4)  → ambos disponibles
// DSPSIZ(*DS4)       → solo DS4 habilitado

// Comportamiento:
// - Si solo hay un tamaño: se selecciona automáticamente, el otro radio queda deshabilitado
// - Si hay ambos: ambos radios activos
// - Designer DS4: zoom 70% para que quepa en pantalla
// - Preview/Source: zoom 100%
```

### 🪟 WINDOW Records con DS3/DS4

Los records `WINDOW` pueden tener dimensiones distintas para DS3 y DS4:

```dds
A          R W_EDT_REG
A                                          *DS3
A                                          WINDOW(3 4 18 69)
A                                          *DS4
A                                          WINDOW(3 12 16 56)
```

`parseWindowDimensionsFromLine` detecta el marcador `*DS3`/`*DS4` y almacena ambas dimensiones. En `parseDspfFields`, antes del renderizado se aplica la normalización:

```javascript
// Selección de dimensiones correctas según displaySize activo:
const currentRecordWindowDims = getWindowDimensions(currentRecord);
const selectedWindow = currentDisplaySize === 'DS3'
    ? currentRecordWindowDims.ds3
    : currentRecordWindowDims.ds4;
windowDimensions = selectedWindow;
```

### 📅 Tipos de Campo Fecha/Hora/Timestamp

Los campos `L` (Date), `T` (Time), `Z` (Timestamp) tienen soporte completo:

| Tipo | DDS | Longitud | Placeholder |
|------|-----|----------|-------------|
| Date | `L` | 10 | `yyyy-mm-dd` |
| Time | `T` | 8 | `hh.mm.ss` |
| Timestamp | `Z` | 26 | `yyyy-mm-dd-hh.mm.ss.mmmmmm` |

- Disponibles en toolbox y en dropdown de tipo de campo
- Longitud y decimales bloqueados (solo lectura en propiedades)
- `parseDdsTypeSpecification` reconoce `L`, `T`, `Z` como specs válidos
- `buildVariableTypeAndUsage` los emite correctamente en DDS

### 📊 Subfiles (SFL/SFLCTL)

```
A          R SFLREC  SFL
A            CAMPO1       10A  O  3 5
A          R SFLCTL  SFLCTL(SFLREC)
A                                      SFLPAG(5)
```

- `SFLPAG(5)` → Designer crea 5 copias visuales del campo en filas consecutivas
- Las copias tienen `isVisualCopy: true` y no se escriben al DDS
- El SFLCTL se carga como "companion record" para contexto de campos auxiliares

### 🔄 Indicadores OR/AND

**AND (un grupo):**
```dds
A  02 43                               DSPATR(HI)
```

**OR (múltiples grupos con `AO`):**
```dds
A  02                                  DSPATR(HI)
AO 43                                  DSPATR(RI)
```

Estructura interna:
```javascript
{
  groups: [
    { indicators: [{ number: '02', not: false }] },
    { indicators: [{ number: '43', not: false }] }
  ],
  isOr: true
}
```

### 📐 Formato Compacto de Coordenadas

Cuando la columna tiene 3 dígitos (≥100), no se agrega espacio separador entre fila y columna para mantener el alineamiento DDS:

```
// Columna 2 dígitos: "A  CAMPO     5A  O  3 25"  (espacio entre 3 y 25)
// Columna 3 dígitos: "A  CAMPO     5A  O  3100"   (sin espacio, 3+100)
```

`extractRowColFromParts` reconoce ambos formatos al parsear.

### 🔍 DFTVAL con Indicadores

El campo `DFTVAL` soporta indicadores independientes. `applyFieldProperties` detecta cambios tanto en el valor como en los indicadores:

```javascript
const dftvalChanged = newField.dftval !== oldDftval;
const dftvalIndicatorsChanged = JSON.stringify(newField.dftvalIndicators) !== JSON.stringify(oldDftvalIndicators);
shouldUpdateDds = Boolean(... || dftvalChanged || dftvalIndicatorsChanged);
```

---

## Estructura de Datos

### Objeto Campo (Field)

```javascript
{
  // Identidad
  id: "field_1234567890_abc",
  name: "CAMPO_01",
  recordName: "PANTALLA",

  // Tipo de dato
  type: "output" | "input" | "both" | "constant" | "keyword",
  dataType: "character" | "zoned" | "packed" | "float" | "double"
           | "date" | "time" | "timestamp",
  length: 10,
  decimals: 2,
  usage: "O" | "I" | "B" | "H" | "M" | "N" | "P",

  // Posición en pantalla
  row: 5,
  col: 10,

  // Constantes
  value: "TEXTO",

  // Atributos
  color: "RED",
  colors: ["RED", "BLU"],
  attributes: { underline: true, reverse: false, blink: false, highlight: false, ... },
  checkOptions: { ME: true, ER: false, ... },
  dftval: "VALOR_DEFECTO",

  // Indicadores por atributo (estructura OR/AND)
  indicators: { groups: [...], isOr: false },
  colorIndicators: { RED: { groups: [...], isOr: false } },
  attributeIndicators: { underline: { groups: [...], isOr: false } },
  checkIndicators: { ME: { groups: [...], isOr: false } },
  dftvalIndicators: { groups: [...], isOr: false },

  // Flags modificados (señalan que hay cambios pendientes)
  colorIndicatorsModified: false,
  attributeIndicatorsModified: false,
  checkIndicatorsModified: false,
  dftvalIndicatorsModified: false,

  // Flags internos
  isVisualCopy: false,        // Copia visual de SFLPAG
  isBackgroundRecord: false,  // Campo del companion record (SFLCTL)
  isKeyword: false,           // Campo tipo keyword (DATE, TIME, etc.)
}
```

---

## Flujo de Parsing DDS

```
parseDspfFields(content)
│
├─ Por cada línea:
│   ├─ Detectar record (A  R NOMBRE)
│   ├─ Si inTargetRecord:
│   │   ├─ parseWindowDimensionsFromLine() → windowDimensions{ds3, ds4}
│   │   ├─ Detectar línea de campo
│   │   │   ├─ parseFieldLineForDesigner(line)
│   │   │   │   ├─ parseDdsTypeSpecification() → {dataType, length, decimals}
│   │   │   │   ├─ extractRowColFromParts()    → {row, col}
│   │   │   │   └─ parseUsageAndDecimals()     → {usage, decimals}
│   │   │   └─ scanAttributeLinesAfterField()
│   │   │       ├─ scanIndicatorsBackward()    → grupos OR/AND
│   │   │       ├─ extractAttributes()         → COLOR/DSPATR/CHECK/DFTVAL
│   │   │       └─ Llena field.colorIndicators, etc.
│   │   └─ fields.push(field)
│
├─ Si hay companion record (SFL/SFLCTL): parse adicional
│
├─ Normalizar windowDimensions según currentDisplaySize (DS3/DS4)
│
├─ Si SFL y SFLCTL tiene WINDOW: usar dims del SFLCTL
│
└─ Renderizar en canvas:
    ├─ Dibuja window-frame si windowDimensions existe
    ├─ Para cada field: renderField() / renderWindowField()
    └─ applySflpagRepetition() si hay subfile
```

---

## Flujo de Generación DDS

```
applyFieldProperties() / moveField()
│
├─ Detecta qué cambió (shouldUpdateDds = Boolean(...))
│
├─ generateDdsLine(field)
│   ├─ Constante → generateConstantFieldLines()
│   ├─ Keyword   → línea especial (DATE, TIME, SYSNAME, etc.)
│   └─ Variable  → buildVariableTypeAndUsage() + columnas DDS
│       └─ Coordenadas: formato compacto si col ≥ 100
│
├─ generateFieldDspatrLines(field)
│   └─ generateDdsLineWithIndicators('DSPATR(...)', indicators)
│       ├─ AND: una línea "A  02 43  DSPATR(...)"
│       └─ OR:  "A  02  DSPATR(...)" + "AO 43  DSPATR(...)"
│
├─ generateFieldColorLines(field)
├─ generateFieldCheckLines(field)
├─ generateFieldDftvalLines(field)
│
└─ findFieldBlockInDds() → reemplaza bloque en currentDocument
```

---

## Guía de Desarrollo

### Agregar soporte para un nuevo tipo de campo

1. **`parseDdsTypeSpecification.js`** — reconocer el nuevo spec
2. **`buildVariableTypeAndUsage.js`** — emitirlo en DDS
3. **`getFieldDisplayText.js`** — placeholder visual
4. **`showFieldProperties.js`** — agregar opción al dropdown
5. **`applyFieldProperties.js`** — defaults al seleccionar tipo
6. **`getDefaultLength.js`** — longitud por defecto

### Agregar un nuevo atributo DDS

1. Agregar parsing en **`extractAttributes.js`** / **`scanAttributeLinesAfterField.js`**
2. Agregar generación en un nuevo `generateField[Attr]Lines.js`
3. Agregar UI en **`showFieldProperties.js`** y **`applyFieldProperties.js`**
4. Agregar al objeto Field en el modelo de datos

### Compilación y Debug

```bash
npm run compile      # Compila webpack (extensión + webview)
npm run watch        # Modo watch (recompila al guardar)
npm run package      # Empaqueta .vsix para distribución
```

**Debug:**
1. Presiona `F5` en VS Code para lanzar extensión en modo debug
2. En la ventana emergente, abre un archivo `.dspf`
3. Abre DevTools del webview: clic derecho → "Open WebView Developer Tools" (o busca el comando en la paleta)
4. Usa `Logger.debug(...)` para mensajes de diagnóstico en consola

### Convención de Módulos

Cada módulo en `media/modules/` debe:
- Exportar una sola función o clase principal como `module.exports`
- No acceder al DOM directamente (exceptuando módulos en `ui/`)
- Los módulos en `utils/` deben ser **puramente funcionales** sin efectos secundarios DOM
- Recibir `Logger` como parámetro si necesitan logging (inyección de dependencias)

---

## Notas Importantes

### Performance
- El parsing completo se ejecuta al abrir archivo o cambiar de vista
- El canvas se re-renderiza limpiando y redibujando todos los campos
- `findFieldBlockInDds()` usa `splice()` para actualizaciones locales (evita re-parse completo)

### Limitaciones Conocidas
- Solo se soportan DS3 (24×80) y DS4 (27×132)
- No todos los keywords DDS están implementados (foco en los más comunes)

---

## Referencias

### Documentación IBM i
- [DDS for Display Files](https://www.ibm.com/docs/en/i/7.4?topic=dds-display-files)
- [Display File Programming](https://www.ibm.com/docs/en/i/7.4?topic=files-display-file-operations)

### VS Code API
- [Webview API](https://code.visualstudio.com/api/extension-guides/webview)
- [Custom Editors](https://code.visualstudio.com/api/extension-guides/custom-editors)

---

**Última actualización:** Marzo 2026
**Versión:** 1.2.0