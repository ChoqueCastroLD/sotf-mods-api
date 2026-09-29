export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Field_Too_LongInputs = {
    max: NonNullable<unknown>;
};
/**
* | max__plural | output |
* | --- | --- |
* | "one" | "Use at most {max__number} character." |
* | * | "Use at most {max__number} characters." |
*
* @param {Errors_Field_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_field_too_long: ((inputs: Errors_Field_Too_LongInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Field_Too_LongInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
