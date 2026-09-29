export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Payload_Too_Large_DetailInputs = {};
/**
* | output |
* | --- |
* | "That file is over the size limit. Compress it or upload a smaller one." |
*
* @param {Errors_Code_Payload_Too_Large_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_payload_too_large_detail: ((inputs?: Errors_Code_Payload_Too_Large_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Payload_Too_Large_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
