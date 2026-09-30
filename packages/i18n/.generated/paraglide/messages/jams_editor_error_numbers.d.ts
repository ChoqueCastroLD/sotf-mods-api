export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Error_NumbersInputs = {};
/**
* | output |
* | --- |
* | "Check the numbers: entries 1 to 5, co-authors 0 to 10, age 0 to 365, activity 0 to 100 and votes 1 to 1000." |
*
* @param {Jams_Editor_Error_NumbersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_error_numbers: ((inputs?: Jams_Editor_Error_NumbersInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_NumbersInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
