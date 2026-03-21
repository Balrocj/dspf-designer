# DSPF Designer

🎉 **The first VS Code extension to visually design IBM i display files (DSPF).**
Create and edit IBM i screen files using an intuitive drag-and-drop designer. This is not a renderer — it’s a true visual editor.

## Features

### 🎨 Visual Designer
Modern drag-and-drop interface for building IBM i display files with real-time DDS generation. Design your screens visually and let the extension handle the DDS syntax.

### 📐 Multi-Display Size Support
- **DS3**: 24 rows x 80 columns (standard)
- **DS4**: 27 rows x 132 columns (wide)
- Switch between display sizes instantly in both designer and preview modes

### 🔧 Comprehensive Field Support
- **Variable Fields**: Character, numeric (zoned, packed, float), double-byte (DBCS)
- **Special Fields**: DATE, TIME, SYSNAME, USER with automatic formatting
- **Constants**: Static text with multi-line support
- **Display Attributes**: Underline, reverse image, blinking, high intensity, column separator
- **IBM i Colors**: All 7 standard colors (Green, White, Red, Turquoise, Yellow, Pink, Blue)
- **Change Window Size**: Dynamically adjust window dimensions for flexible layouts 

### 🎯 Advanced Indicators
- Configure indicators for colors and attributes independently
- Visual indicator configuration with support for negated indicators (N)
- Multiple colors per field with separate indicator conditions

### 👁️ Live Preview
Real-time preview showing how your screen will appear on IBM i, directly generated from the visual designer and DDS source.

### 💾 Three-View Design
- **Designer**: Visual canvas with toolbox and properties panel
- **Preview**: Real-time IBM i screen simulation
- **Source**: Direct DDS code editing with syntax support

## Getting Started

1. Open any `.dspf` file; a message will appear asking if you want to open designer mode. If you answer yes, it will start automatically.
2. Drag fields from the toolbox onto the canvas
3. Configure properties and indicators in the side panel
4. Click **Save** to update the DDS source file

## Requirements

- Visual Studio Code 1.106.0 or higher

## Extension Settings

This extension automatically associates with `.dspf` files and requires no additional configuration.
You can edit your DSPF files offline. You can edit DSPF files located on your local machine.

## Known Limitations

- This extension is currently in preview; not all DDS features are available in the designer yet
- Some advanced or less common DDS keywords may require editing in Source view
- Subfile and complex DDS features have limited visual support in this version
- This version focuses on editing existing record formats (record creation coming soon)

## Roadmap

- Additional data types (binary, date/time formats) and fields
- Record format creation wizard
- Extended keyword subfile support 
- Extended keyword support for more DDS features
- Database-referenced field support (REF, REFFLD)

---

**Developed for the IBM i community by an enthusiast passionate about modernizing screen design and improving developer productivity.**

**Happy DSPF Development!** 