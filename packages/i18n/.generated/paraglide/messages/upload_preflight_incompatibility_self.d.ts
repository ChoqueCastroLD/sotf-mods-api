export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Incompatibility_SelfInputs = {};
/**
* | output |
* | --- |
* | "A mod cannot be marked as incompatible with itself." |
*
* @param {Upload_Preflight_Incompatibility_SelfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_incompatibility_self: ((inputs?: Upload_Preflight_Incompatibility_SelfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Incompatibility_SelfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
