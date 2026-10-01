export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Sum_WarningsInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Warnings: {count}" |
*
* @param {Logs_Sum_WarningsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_sum_warnings: ((inputs: Logs_Sum_WarningsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Sum_WarningsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
