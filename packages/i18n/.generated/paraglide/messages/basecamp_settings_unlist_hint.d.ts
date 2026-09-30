export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Settings_Unlist_HintInputs = {};
/**
* | output |
* | --- |
* | "Hide it from lists and search. Anyone with the link can still download it." |
*
* @param {Basecamp_Settings_Unlist_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_settings_unlist_hint: ((inputs?: Basecamp_Settings_Unlist_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Unlist_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
