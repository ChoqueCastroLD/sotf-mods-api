export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Name_Too_ShortInputs = {
    min: NonNullable<unknown>;
};
/**
* | min__plural | output |
* | --- | --- |
* | "one" | "Use at least {min__number} character." |
* | * | "Use at least {min__number} characters." |
*
* @param {Kits_Name_Too_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_name_too_short: ((inputs: Kits_Name_Too_ShortInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Name_Too_ShortInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
