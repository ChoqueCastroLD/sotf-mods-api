export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Curated_ByInputs = {
    curator: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Curated by {curator}" |
*
* @param {Kits_Curated_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_curated_by: ((inputs: Kits_Curated_ByInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Curated_ByInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
