export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Meta_Login_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Sign in to SOTF Mods to follow mods, get pinged when they update and publish your own." |
*
* @param {Auth_Meta_Login_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_meta_login_description: ((inputs?: Auth_Meta_Login_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Meta_Login_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
