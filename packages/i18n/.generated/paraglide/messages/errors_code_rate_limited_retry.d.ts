export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Rate_Limited_RetryInputs = {
    seconds: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Kelvin needs a break. Try again in {seconds__number} s." |
*
* @param {Errors_Code_Rate_Limited_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_rate_limited_retry: ((inputs: Errors_Code_Rate_Limited_RetryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Rate_Limited_RetryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
