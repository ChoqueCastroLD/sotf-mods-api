export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Auto_Publish_HintInputs = {};
/**
* | output |
* | --- |
* | "When voting closes, results are computed and published without review." |
*
* @param {Jams_Editor_Auto_Publish_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_auto_publish_hint: ((inputs?: Jams_Editor_Auto_Publish_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Auto_Publish_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
