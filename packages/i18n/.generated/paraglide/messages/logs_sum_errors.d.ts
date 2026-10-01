export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Sum_ErrorsInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Errors: {count}" |
*
* @param {Logs_Sum_ErrorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_sum_errors: ((inputs: Logs_Sum_ErrorsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_ErrorsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
