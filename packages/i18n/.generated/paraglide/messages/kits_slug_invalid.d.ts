export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Slug_InvalidInputs = {};
/**
* | output |
* | --- |
* | "Use 2–80 lowercase letters, digits and hyphens, not at the start or the end." |
*
* @param {Kits_Slug_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_slug_invalid: ((inputs?: Kits_Slug_InvalidInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Slug_InvalidInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
