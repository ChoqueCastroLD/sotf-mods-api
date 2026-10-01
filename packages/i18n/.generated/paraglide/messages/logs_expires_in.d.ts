export type LocalizedString = import('../runtime.js').LocalizedString;
export type Logs_Expires_InInputs = {
    time: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Deleted in {time}" |
*
* @param {Logs_Expires_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const logs_expires_in: ((inputs: Logs_Expires_InInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Expires_InInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
