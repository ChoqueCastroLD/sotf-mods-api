export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Relogin_BannerInputs = {};
/**
* | output |
* | --- |
* | "We rebuilt SOTF Mods. Sign in again — your password is the same." |
*
* @param {Common_Relogin_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_relogin_banner: ((inputs?: Common_Relogin_BannerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Relogin_BannerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
