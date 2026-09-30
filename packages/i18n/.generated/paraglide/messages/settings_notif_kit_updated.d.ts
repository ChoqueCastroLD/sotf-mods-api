export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Kit_UpdatedInputs = {};
/**
* | output |
* | --- |
* | "Followed kit updated" |
*
* @param {Settings_Notif_Kit_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_kit_updated: ((inputs?: Settings_Notif_Kit_UpdatedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Kit_UpdatedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
