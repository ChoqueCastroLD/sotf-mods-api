export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_Mode_HostInputs = {};
/**
* | output |
* | --- |
* | "Multiplayer host" |
*
* @param {Social_Compat_Mode_HostInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_mode_host: ((inputs?: Social_Compat_Mode_HostInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_HostInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
