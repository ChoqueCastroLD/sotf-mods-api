export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Hide_PassedInputs = {};
/**
* | output |
* | --- |
* | "Hide passed checks" |
*
* @param {Upload_Preflight_Hide_PassedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_hide_passed: ((inputs?: Upload_Preflight_Hide_PassedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Hide_PassedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
