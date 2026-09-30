export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Size_Range_BetweenInputs = {
    min: NonNullable<unknown>;
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{min} to {max} pieces" |
*
* @param {Builds_Size_Range_BetweenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_size_range_between: ((inputs: Builds_Size_Range_BetweenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_BetweenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
