export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Unauthenticated_TitleInputs = {};
/**
* | output |
* | --- |
* | "Log in to continue" |
*
* @param {Errors_Code_Unauthenticated_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_unauthenticated_title: ((inputs?: Errors_Code_Unauthenticated_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unauthenticated_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
