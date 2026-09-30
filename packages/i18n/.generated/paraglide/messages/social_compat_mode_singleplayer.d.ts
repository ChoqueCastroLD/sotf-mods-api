export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_Mode_SingleplayerInputs = {};
/**
* | output |
* | --- |
* | "Singleplayer" |
*
* @param {Social_Compat_Mode_SingleplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_mode_singleplayer: ((inputs?: Social_Compat_Mode_SingleplayerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_SingleplayerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
