export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Email_Not_Verified_TitleInputs = {};
/**
* | output |
* | --- |
* | "Verify your email first" |
*
* @param {Errors_Code_Email_Not_Verified_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_email_not_verified_title: ((inputs?: Errors_Code_Email_Not_Verified_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Email_Not_Verified_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
