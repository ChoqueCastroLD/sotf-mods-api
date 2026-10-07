export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Schedule_Fill_TextInputs = {};
/**
* | output |
* | --- |
* | "Announcement on the start date, submissions open 3 days later for 14 days, then 7 days of voting. The archive follows 14 days after that." |
*
* @param {Jams_Editor_Schedule_Fill_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_schedule_fill_text: ((inputs?: Jams_Editor_Schedule_Fill_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_Fill_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
