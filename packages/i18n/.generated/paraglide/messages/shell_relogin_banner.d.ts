export type LocalizedString = import('../runtime.js').LocalizedString;
export type Shell_Relogin_BannerInputs = {};
/**
* | output |
* | --- |
* | "We rebuilt SOTF Mods. Log in again with the same password." |
*
* @param {Shell_Relogin_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const shell_relogin_banner: ((inputs?: Shell_Relogin_BannerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Relogin_BannerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
