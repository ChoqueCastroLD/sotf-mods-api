export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_In_KitsInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "In {count__number} Kit" |
* | * | "In {count__number} Kits" |
*
* @param {Builds_In_KitsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_in_kits: ((inputs: Builds_In_KitsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_In_KitsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
