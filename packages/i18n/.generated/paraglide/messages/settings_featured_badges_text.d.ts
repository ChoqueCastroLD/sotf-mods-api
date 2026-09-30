export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Featured_Badges_TextInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Choose up to {max} earned badges for the header of your profile." |
*
* @param {Settings_Featured_Badges_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_featured_badges_text: ((inputs: Settings_Featured_Badges_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
