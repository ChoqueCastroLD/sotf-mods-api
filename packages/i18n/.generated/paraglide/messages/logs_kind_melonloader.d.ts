export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Kind_MelonloaderInputs = {};
/**
* | output |
* | --- |
* | "MelonLoader" |
*
* @param {Logs_Kind_MelonloaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_kind_melonloader: ((inputs?: Logs_Kind_MelonloaderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_MelonloaderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
