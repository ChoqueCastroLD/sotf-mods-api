export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_HowtoInputs = {};
/**
* | output |
* | --- |
* | "SotF Mods Manager installs every mod of the modpack as a new profile. You can also download the .sotfprofile file and import it." |
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
