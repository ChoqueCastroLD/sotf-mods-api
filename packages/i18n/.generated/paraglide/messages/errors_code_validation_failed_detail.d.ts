export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Validation_Failed_DetailInputs = {};
/**
* | output |
* | --- |
* | "Some of what you entered can’t be used. Fix the fields marked below and try again." |
*
* @param {Errors_Code_Validation_Failed_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_validation_failed_detail: ((inputs?: Errors_Code_Validation_Failed_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Validation_Failed_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
