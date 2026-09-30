export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Nsfw_On_SavedInputs = {};
/**
* | output |
* | --- |
* | "Mature content is now shown" |
*
* @param {Settings_Nsfw_On_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_nsfw_on_saved: ((inputs?: Settings_Nsfw_On_SavedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_On_SavedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
