export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_DisclaimerInputs = {};
/**
* | output |
* | --- |
* | "SOTF Mods is an unofficial fan community. Not affiliated with or endorsed by Endnight Games Ltd. “Sons of the Forest” is a trademark of its owner." |
*
* @param {Common_DisclaimerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_disclaimer: ((inputs?: Common_DisclaimerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_DisclaimerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
