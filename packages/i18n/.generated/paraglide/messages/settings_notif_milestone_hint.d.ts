export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Notif_Milestone_HintInputs = {};
/**
* | output |
* | --- |
* | "A mod of yours passed a download milestone." |
*
* @param {Settings_Notif_Milestone_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_notif_milestone_hint: ((inputs?: Settings_Notif_Milestone_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Milestone_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
