export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Autosave_OfflineInputs = {};
/**
* | output |
* | --- |
* | "Offline. Your changes are kept here and saved when you’re back." |
*
* @param {Upload_Autosave_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_autosave_offline: ((inputs?: Upload_Autosave_OfflineInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Autosave_OfflineInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
