export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Check_ScheduleInputs = {};
/**
* | output |
* | --- |
* | "Dates for submissions and voting" |
*
* @param {Jams_Editor_Check_ScheduleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_check_schedule: ((inputs?: Jams_Editor_Check_ScheduleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Check_ScheduleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
