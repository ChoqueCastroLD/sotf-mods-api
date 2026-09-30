export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Field_Slug_HintInputs = {};
/**
* | output |
* | --- |
* | "Lowercase letters, digits and hyphens, used in /kits/you/address." |
*
* @param {Kits_Field_Slug_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_field_slug_hint: ((inputs?: Kits_Field_Slug_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Field_Slug_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
