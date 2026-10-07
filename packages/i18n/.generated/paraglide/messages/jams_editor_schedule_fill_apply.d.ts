export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Schedule_Fill_ApplyInputs = {};
/**
* | output |
* | --- |
* | "Fill in dates" |
*
* @param {Jams_Editor_Schedule_Fill_ApplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_schedule_fill_apply: ((inputs?: Jams_Editor_Schedule_Fill_ApplyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_ApplyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
