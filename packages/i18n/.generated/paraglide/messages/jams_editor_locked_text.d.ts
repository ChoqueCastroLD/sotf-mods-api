export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Locked_TextInputs = {};
/**
* | output |
* | --- |
* | "The phase was forced by hand, so the schedule no longer moves it. Resume the schedule to hand control back." |
*
* @param {Jams_Editor_Locked_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_locked_text: ((inputs?: Jams_Editor_Locked_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Locked_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
