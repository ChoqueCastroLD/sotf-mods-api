export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Err_RateInputs = {
    seconds: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Too many requests. Try again in {seconds} s" |
*
* @param {Logs_Err_RateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_err_rate: ((inputs: Logs_Err_RateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_RateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
