export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Featured_Badges_SavedInputs = {};
/**
* | output |
* | --- |
* | "Featured badges saved." |
*
* @param {Settings_Featured_Badges_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_featured_badges_saved: ((inputs?: Settings_Featured_Badges_SavedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Featured_Badges_SavedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
