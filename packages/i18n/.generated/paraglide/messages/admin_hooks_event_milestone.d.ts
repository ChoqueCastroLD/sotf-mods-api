export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Hooks_Event_MilestoneInputs = {};
/**
* | output |
* | --- |
* | "10k download milestones" |
*
* @param {Admin_Hooks_Event_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_hooks_event_milestone: ((inputs?: Admin_Hooks_Event_MilestoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Event_MilestoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
