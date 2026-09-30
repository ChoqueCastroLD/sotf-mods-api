export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Size_NameInputs = {
    size: NonNullable<unknown>;
};
/**
* | size | output |
* | --- | --- |
* | "S" | "Small" |
* | "M" | "Medium" |
* | "L" | "Large" |
* | "XL" | "Extra large" |
* | * | "{size}" |
*
* @param {Builds_Size_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_size_name: ((inputs: Builds_Size_NameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Size_NameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
