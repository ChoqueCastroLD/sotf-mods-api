export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Meta_Reset_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Choose a new password for your SOTF Mods account." |
*
* @param {Auth_Meta_Reset_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_meta_reset_description: ((inputs?: Auth_Meta_Reset_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Reset_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
