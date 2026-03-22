export const ATTRIBUTE_KEYWORDS = ['COLOR', 'DSPATR', 'VALUES', 'CHECK', 'PSHBTNCHC', 'PSHBTNFLD', 'DFTVAL', 'DFT', 'EDTCDE', 'EDTWRD', 'EDTMSK', 'RANGE'];
export const ATTRIBUTE_KEYWORDS_SET = new Set(ATTRIBUTE_KEYWORDS);
export const attributeContentRegex = new RegExp(`\\b(?:${ATTRIBUTE_KEYWORDS.join('|')})\\(`);

export const CHECK_CHAR_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL', 'LC'];
export const CHECK_NUMERIC_CODES = ['ME', 'ER', 'MF', 'FE', 'RB', 'RZ', 'RL'];
