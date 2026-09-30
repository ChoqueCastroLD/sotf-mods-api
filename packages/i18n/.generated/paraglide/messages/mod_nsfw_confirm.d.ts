export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Nsfw_ConfirmInputs = {};
/**
* | output |
* | --- |
* | "I’m 18 or older, show it" |
*
* @param {Mod_Nsfw_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_nsfw_confirm: ((inputs?: Mod_Nsfw_ConfirmInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Nsfw_ConfirmInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
