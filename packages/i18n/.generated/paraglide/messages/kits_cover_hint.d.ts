export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Cover_HintInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF, up to {max} MB. A wide 3:1 image works best." |
*
* @param {Kits_Cover_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_cover_hint: ((inputs: Kits_Cover_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
