export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_Mode_Singleplayer_HintInputs = {};
/**
* | output |
* | --- |
* | "Playing alone." |
*
* @param {Social_Compat_Mode_Singleplayer_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_mode_singleplayer_hint: ((inputs?: Social_Compat_Mode_Singleplayer_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_Singleplayer_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
