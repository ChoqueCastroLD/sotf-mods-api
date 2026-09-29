export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Payload_Too_Large_TitleInputs = {};
/**
* | output |
* | --- |
* | "File too large" |
*
* @param {Errors_Code_Payload_Too_Large_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_payload_too_large_title: ((inputs?: Errors_Code_Payload_Too_Large_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Payload_Too_Large_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
