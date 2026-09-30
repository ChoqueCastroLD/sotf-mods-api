export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Settings_Unlist_TitleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Unlist {name}?" |
*
* @param {Basecamp_Settings_Unlist_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_settings_unlist_title: ((inputs: Basecamp_Settings_Unlist_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Unlist_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
