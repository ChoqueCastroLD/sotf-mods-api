export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Min_Activity_HintInputs = {};
/**
* | output |
* | --- |
* | "Comments, reviews and favorites the voter must have. Use 0 to allow anyone." |
*
* @param {Jams_Editor_Min_Activity_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_min_activity_hint: ((inputs?: Jams_Editor_Min_Activity_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Min_Activity_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
