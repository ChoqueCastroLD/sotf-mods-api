export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Schedule_Fill_ReplaceInputs = {};
/**
* | output |
* | --- |
* | "This replaces the dates you have now. Nothing is saved until you press Save." |
*
* @param {Jams_Editor_Schedule_Fill_ReplaceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_schedule_fill_replace: ((inputs?: Jams_Editor_Schedule_Fill_ReplaceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_ReplaceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
