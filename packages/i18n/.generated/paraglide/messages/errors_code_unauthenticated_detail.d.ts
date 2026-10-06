export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Unauthenticated_DetailInputs = {};
/**
* | output |
* | --- |
* | "Your session ended or you haven’t logged in yet. Log in and we’ll bring you back here." |
*
* @param {Errors_Code_Unauthenticated_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_unauthenticated_detail: ((inputs?: Errors_Code_Unauthenticated_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unauthenticated_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
