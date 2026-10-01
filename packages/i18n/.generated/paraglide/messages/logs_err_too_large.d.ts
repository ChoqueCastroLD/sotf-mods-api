export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Err_Too_LargeInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "That log is larger than {max}. Send only the part around the problem." |
*
* @param {Logs_Err_Too_LargeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_err_too_large: ((inputs: Logs_Err_Too_LargeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_Too_LargeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
