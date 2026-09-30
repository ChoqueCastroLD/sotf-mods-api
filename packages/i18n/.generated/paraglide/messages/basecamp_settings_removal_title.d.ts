export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Settings_Removal_TitleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Request the removal of {name}?" |
*
* @param {Basecamp_Settings_Removal_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_settings_removal_title: ((inputs: Basecamp_Settings_Removal_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
