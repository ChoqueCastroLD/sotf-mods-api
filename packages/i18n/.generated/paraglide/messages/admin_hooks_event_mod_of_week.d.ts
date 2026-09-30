export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Hooks_Event_Mod_Of_WeekInputs = {};
/**
* | output |
* | --- |
* | "Mod of the Week" |
*
* @param {Admin_Hooks_Event_Mod_Of_WeekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_hooks_event_mod_of_week: ((inputs?: Admin_Hooks_Event_Mod_Of_WeekInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Event_Mod_Of_WeekInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
