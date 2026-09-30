export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Visibility_Unlisted_HintInputs = {};
/**
* | output |
* | --- |
* | "Only people with the link or the code." |
*
* @param {Kits_Visibility_Unlisted_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_visibility_unlisted_hint: ((inputs?: Kits_Visibility_Unlisted_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Visibility_Unlisted_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
