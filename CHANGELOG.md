# Change Log

All notable changes to the "dspf-designer" extension will be documented in this file.

## [2.5.0] - 2026-04-26
### ✨ Added
- Added new button to go to settings in the properties panel.

## [2.4.0] - 2026-04-26
### ✨ Added
- Added support to prevent the REFFLD keyword from being deleted when editing, updating, or moving a field.
- Added support the TEXT keyword for fields in the designer. The TEXT keyword allows you to specify a text description for a field, which can be used for documentation purposes or to provide additional context about the field's purpose.
- Logic is added to preserve the original order of keywords when editing, updating, or moving a field in the designer view.

## [2.3.0] - 2026-04-25
### ✨ Added
-Added suport for MSGID keyword. The designer now supports the MSGID keyword for message subfiles, allowing you to specify a message identifier for subfile records.

## [2.2.0] - 2026-04-25
### ✨ Added
-Adjusted field parsing to recognize hidden fields (usage 'H') without coordinates and added summary of hidden fields in Designer view.

## [2.1.1] - 2026-04-21
### 🐛 Fixed
- Modified the logic that read the indicators to show in the preview view.

## [2.1.0] - 2026-04-19
### ✨ Added
- Added support for subfile with multile lines. The designer now allows you to visually design subfiles with multiple lines.
- Add new feature to allow users to simulate conditioning indicators (SDA-like) directly in the preview like F6 in SDA.

## [2.0.2] - 2026-04-18

### 🐛 Fixed
- The regular expression was modified to ignore comments between columns 1 and 5.
- The regular expression was modified to not read the linea if it contains a comment in column 6.

## [2.0.1] - 2026-04-01

### 🐛 Fixed
- It adjusts to hide the Save button when it's set to save automatically.
- It is adjusted to read the fields when the coordinates need to be calculated.

## [2.0.0] - 2026-03-27

### 🎨 Improved
- Replaced Source textarea view with a real CodeMirror editor (line numbers, native search panel, and synchronized updates).
- Added a new `dspfDesigner.openBehavior` setting to control whether Designer Mode opens in the current editor, a new tab, or a new window, allowing users to keep the text editor open alongside the designer if desired.
- Added a new `dspfDesigner.saveMode` setting to enable automatic saving of changes while editing in Designer or Source views, providing a more seamless editing experience without needing to click the Save button.

## [1.4.0] - 2026-03-24

### 🎨 Improved
- Added support for keyword `CNTFLD` for char output/input fields.

## [1.3.4] - 2026-03-24

### 🐛 Fixed
- The parsing of the keywords SFLDSP and SFLDSPCTL is adjusted.
- The rendering of Windows-style registers is adjusted.
- The rendering of the keyword EDTCDE(3) is adjusted.

## [1.3.3] - 2026-03-23

### 🎨 Improved
- Unified DDS keyword classification using centralized constants:
  - Added shared keyword sets in `ddsConstants` for attribute detection and end-to-end regeneration.
  - Replaced duplicated hardcoded keyword checks in parser/update flows with shared sets/regex.

### 🐛 Fixed
- Improved preservation of unknown DDS keywords during field updates and drag-and-drop moves.

## [1.3.2] - 2026-03-23

### 🐛 Fixed
- The scanning of attributes and indicators in variables and keywords has been corrected.

## [1.3.1] - 2026-03-23

### 🎨 Improved
- Improved `DATE` keyword rendering in Designer/Preview:
  - `DATE(*SYS *YY)` and `DATE(*JOB *YY)` now render as `MM/DD/YYYY`.
  - Other `DATE` variants continue rendering as `MM/DD/YY`.

### 🐛 Fixed
- Fixed numeric preview formatting when `EDTCDE` applies thousand separators to decimal fields:
  - Decimal and thousand separators are now handled independently.
  - Avoids rendering decimal output as a fully grouped integer for fields with decimals (for example `11Y 2`, `15Y 2`).

## [1.3.0] - 2026-03-22

### ✨ Added
- Extended end-to-end support for numeric editing keywords in Designer/Preview/Source sync:
  - `EDTWRD(...)` parse from inline and continuation attribute lines.
  - `EDTMSK(...)` parse from inline and continuation attribute lines.
  - Save/apply support from the **Editing keywords** UI with DDS regeneration.
  - Added support for keyword DFT and VALUES in the designer with proper parsing and saving.

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
