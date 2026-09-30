export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Auto_PublishInputs = {};
/**
* | output |
* | --- |
* | "Publish results automatically" |
*
* @param {Jams_Editor_Auto_PublishInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_auto_publish: ((inputs?: Jams_Editor_Auto_PublishInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Auto_PublishInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
