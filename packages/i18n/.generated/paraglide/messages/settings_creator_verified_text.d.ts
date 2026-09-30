export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Creator_Verified_TextInputs = {};
/**
* | output |
* | --- |
* | "Your mods carry the verified mark and you can upload larger files." |
*
* @param {Settings_Creator_Verified_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_creator_verified_text: ((inputs?: Settings_Creator_Verified_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Verified_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
