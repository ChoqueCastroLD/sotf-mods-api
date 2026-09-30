export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Console_List_LabelInputs = {};
/**
* | output |
* | --- |
* | "Kits you follow" |
*
* @param {Kitsocial_Console_List_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_console_list_label: ((inputs?: Kitsocial_Console_List_LabelInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_List_LabelInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
