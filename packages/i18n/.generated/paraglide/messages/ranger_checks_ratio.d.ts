export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Checks_RatioInputs = {
    ratio: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Compression ratio {ratio}" |
*
* @param {Ranger_Checks_RatioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_checks_ratio: ((inputs: Ranger_Checks_RatioInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_RatioInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
