export const ATTRIBUTE_KEYWORDS = ['COLOR', 'DSPATR', 'VALUES', 'CHECK', 'PSHBTNCHC', 'PSHBTNFLD', 'DFTVAL', 'DFT', 'EDTCDE', 'EDTWRD', 'EDTMSK', 'RANGE', 'CNTFLD', 'MSGID', 'REFFLD'];
export const ATTRIBUTE_KEYWORDS_SET = new Set(ATTRIBUTE_KEYWORDS);
export const attributeContentRegex = new RegExp(`\\b(?:${ATTRIBUTE_KEYWORDS.join('|')})\\(`);

// Keywords that are fully regenerated from Designer state during DDS updates.
// Any keyword outside this set should be treated as unknown and preserved.
export const REGENERATED_KEYWORDS = ['COLOR', 'DSPATR', 'CHECK', 'DFTVAL', 'DFT', 'EDTCDE', 'EDTWRD', 'EDTMSK', 'VALUES', 'CNTFLD', 'MSGID', 'REFFLD'];
export const REGENERATED_KEYWORDS_SET = new Set(REGENERATED_KEYWORDS);

export const CHECK_CHAR_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL', 'LC'];
export const CHECK_NUMERIC_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL'];
