export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Meta_Register_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Join SOTF Mods: follow mods, get notified when they update and share your own creations." |
*
* @param {Auth_Meta_Register_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_meta_register_description: ((inputs?: Auth_Meta_Register_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Register_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
