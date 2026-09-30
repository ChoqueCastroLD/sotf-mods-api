export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Size_Range_BelowInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Fewer than {max} pieces" |
*
* @param {Builds_Size_Range_BelowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_size_range_below: ((inputs: Builds_Size_Range_BelowInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_BelowInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
