export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Size_Range_AboveInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{min} pieces or more" |
*
* @param {Builds_Size_Range_AboveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_size_range_above: ((inputs: Builds_Size_Range_AboveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_Range_AboveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
