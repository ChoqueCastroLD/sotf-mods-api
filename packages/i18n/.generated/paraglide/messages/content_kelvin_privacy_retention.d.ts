export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Privacy_RetentionInputs = {
    days: NonNullable<unknown>;
};
/**
* | days__plural | output |
* | --- | --- |
* | "one" | "The last messages of each conversation are kept for {days__number} day so Kelvin remembers the context, then deleted." |
* | * | "The last messages of each conversation are kept for {days__number} days so Kelvin remembers the context, then deleted." |
*
* @param {Content_Kelvin_Privacy_RetentionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_privacy_retention: ((inputs: Content_Kelvin_Privacy_RetentionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_RetentionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
