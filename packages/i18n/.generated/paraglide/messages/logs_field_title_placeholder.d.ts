export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Field_Title_PlaceholderInputs = {};
/**
* | output |
* | --- |
* | "Crash after loading a save" |
*
* @param {Logs_Field_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_field_title_placeholder: ((inputs?: Logs_Field_Title_PlaceholderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Field_Title_PlaceholderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
