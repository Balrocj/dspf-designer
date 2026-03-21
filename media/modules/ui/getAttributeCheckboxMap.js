// construye un objeto que mapea cada atributo (por ejemplo underline, blink, etc.) 
// al id del checkbox correspondiente en el panel de propiedades.
// Si se pasa allowedKeys, filtra el mapa para incluir solo esos atributos permitidos.
export function getAttributeCheckboxMap(options) {
    const { allowedKeys = null, attributeUiDefs } = options;
    const allowSet = allowedKeys ? new Set(allowedKeys) : null;
    const map = {};

    attributeUiDefs.forEach(def => {
        if (!allowSet || allowSet.has(def.key)) {
            map[def.key] = def.checkboxId;
        }
    });

    return map;
}
