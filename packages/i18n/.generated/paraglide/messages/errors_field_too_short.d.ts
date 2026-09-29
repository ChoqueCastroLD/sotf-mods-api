export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Field_Too_ShortInputs = {
    min: NonNullable<unknown>;
};
/**
* | min__plural | output |
* | --- | --- |
* | "one" | "Use at least {min__number} character." |
* | * | "Use at least {min__number} characters." |
*
* @param {Errors_Field_Too_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_field_too_short: ((inputs: Errors_Field_Too_ShortInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Too_ShortInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
