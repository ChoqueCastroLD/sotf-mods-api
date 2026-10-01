export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Meta_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Paste or drop a RedLoader, BepInEx or Player.log file and get a private link that deletes itself after 24 hours. Personal data is removed first." |
*
* @param {Logs_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_meta_description: ((inputs?: Logs_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
