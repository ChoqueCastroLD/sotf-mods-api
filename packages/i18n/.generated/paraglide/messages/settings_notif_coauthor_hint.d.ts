export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Coauthor_HintInputs = {};
/**
* | output |
* | --- |
* | "Someone invites you to co-author one of their mods." |
*
* @param {Settings_Notif_Coauthor_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_coauthor_hint: ((inputs?: Settings_Notif_Coauthor_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Coauthor_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
