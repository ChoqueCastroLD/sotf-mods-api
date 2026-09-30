export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Too_LongInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The comment must have 1 to {max} characters." |
*
* @param {Kitsocial_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_too_long: ((inputs: Kitsocial_Too_LongInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Too_LongInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
