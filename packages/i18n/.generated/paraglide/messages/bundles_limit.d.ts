export type LocalizedString = import('../runtime.js').LocalizedString;
export type Bundles_LimitInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {max} bundles per mod." |
*
* @param {Bundles_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const bundles_limit: ((inputs: Bundles_LimitInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Bundles_LimitInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
