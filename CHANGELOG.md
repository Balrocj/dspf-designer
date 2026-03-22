# Change Log

All notable changes to the "dspf-designer" extension will be documented in this file.

## [1.3.0] - 2026-03-22

### ✨ Added
- Extended end-to-end support for numeric editing keywords in Designer/Preview/Source sync:
  - `EDTWRD(...)` parse from inline and continuation attribute lines.
  - `EDTMSK(...)` parse from inline and continuation attribute lines.
  - Save/apply support from the **Editing keywords** UI with DDS regeneration.
  - Added support for keyword DFT

### 🎨 Improved
- Improved visual rendering for `EDTWRD` to better match IBM i output patterns (literal symbols + digit placeholders).
- Improved visual rendering for `EDTMSK` masks in numeric fields.
- Added visual mapping for `EDTCDE(Y)` date style output (for example: `99-99-99` on 6-digit fields).
- Added visual mapping for `EDTCDE(W)` Julian date style output.
- Updated `EDTCDE` selector descriptions in Properties for clearer code behavior.

## [1.2.0] - 2026-03-21

### ✨ Added
- Added new navigation buttons to switch from Visual editor to Designer mode and back.
- New variable type support in Fields for DDS special date/time/timestamp specs:
  - `Date (L)`
  - `Time (T)`
  - `Timestamp (Z)`
- Added toolbox buttons in the **Fields** section for:
  - `Date (L)`
  - `Time (T)`
  - `Timestamp (Z)`
- Visual rendering for the new variable types in Designer and Preview:
  - `date` → `yyyy-mm-dd`
  - `time` → `hh.mm.ss`
  - `timestamp` → `yyyy-mm-dd-hh.mm.ss.mmmmmm`
- Properties panel behavior for `L`, `T`, and `Z` fields:
  - Locked length values
  - Correct read-only decimals behavior
  - Consistent type/shift handling

- Added support for keyword `EDTCDE`,`EDTWRD` and `EDTMSK` for numeric output/both fields:
  - New `Editing keywords` panel supports `EDTCDE(code)` and `EDTCDE(code *|$)`.
  - DDS parse/generation now preserves `*`/`$` replacement parameter.
  - Visual rendering now replaces the first `6`/`9` with `*` or `$` when configured.  

### 🎨 Improved
- Improved DSPSIZ radio UX:
  - Disabled unavailable size option
  - Added dimmed visual state for disabled option
  - Added tooltip: `Not available based on DSPSIZ` 

### 🐛 Fixed
- Fixed row/column DDS formatting for 3-digit columns when saving:
  - Removed extra space between row and column only for compact 3-digit column format.

- Fixed `Apply Changes` detection for `DFTVAL` updates:
  - Added proper change detection for `dftval` and `dftvalIndicators`.
  - Ensured `shouldUpdateDds` is always a boolean (avoids `undefined`/false negatives).
  - Prevents incorrect `No changes detected for field` messages when DFTVAL indicators were modified.

- Fixed default display-size initialization based on DSPSIZ:
  - If only one size exists, it is selected by default in Designer and Preview.
  - If both sizes exist, both remain enabled.

- Fixed WINDOW frame rendering for records with both DS3 and DS4 `WINDOW()` definitions:
  - Designer now correctly draws the window frame using the dimensions matching the active display size (`DS3`/`DS4`).
  - Previously, the frame always used the first-parsed (DS3) dimensions even when DS4 was selected.

## [1.1.0] - 2026-02-14
- Adjusted automatic rendering when changing size between 24x80/27x132
- It has been improved to allow optionally opening designer mode.
- Adjustment to the rendering of numeric variables
- Zoom buttons added

## [1.0.0] - 2026-01-13

### 🎉 Initial Release
- Visual drag-and-drop designer for IBM i Display Files
- Multi-display size support (DS3: 24x80, DS4: 27x132)
- Three-view interface: Designer, Preview, and Source
- Complete field type support:
  - Variable fields (character, zoned, packed, float, double-byte)
  - Special fields (DATE, TIME, SYSNAME, USER)
  - Constants with multi-line support
- Display attributes: underline, reverse image, blinking, high intensity, column separator, non-display
- Full IBM i color palette support (7 standard colors)
- Advanced indicator configuration:
  - Separate indicators for colors and attributes
  - Support for negated indicators (N prefix)
  - Multiple colors per field with independent indicator conditions
- Live preview with authentic IBM i 5250 rendering
- Real-time DDS code generation
- Automatic file association with `.dspf` files
- Field management: add, edit, delete, move, and reposition
- Properties panel with tabbed interface (Basic, Attributes, Colors)
- Grid-based positioning with visual rulers
- Window record support
- Proper DDS column alignment for indicators (column 44)
- Field deletion now removes associated COLOR and DSPATR lines
- Unique field name generation to prevent duplicates
- Correct numeric/character field representation in preview (3/6/9 I/O/B for input/output/both)
- Color and attribute indicator saving with proper formatting
- Usage type change detection for DDS updates
