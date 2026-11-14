export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_HowtoInputs = {};
/**
* | output |
* | --- |
* | "Open the downloaded .sotfprofile file in SotF Mods Manager (Profiles, Import profile) to install every mod." |
*
* @param {Modpacks_HowtoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_howto: ((inputs?: Modpacks_HowtoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_HowtoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
