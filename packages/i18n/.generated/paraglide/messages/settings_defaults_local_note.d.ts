export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Defaults_Local_NoteInputs = {};
/**
* | output |
* | --- |
* | "These defaults are saved in this browser only." |
*
* @param {Settings_Defaults_Local_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_defaults_local_note: ((inputs?: Settings_Defaults_Local_NoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Defaults_Local_NoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
