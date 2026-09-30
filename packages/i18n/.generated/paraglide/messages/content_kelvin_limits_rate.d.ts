export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Limits_RateInputs = {
    perMinute: NonNullable<unknown>;
    perDay: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {perMinute__number} messages a minute and {perDay__number} a day per player." |
*
* @param {Content_Kelvin_Limits_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_limits_rate: ((inputs: Content_Kelvin_Limits_RateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Limits_RateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
