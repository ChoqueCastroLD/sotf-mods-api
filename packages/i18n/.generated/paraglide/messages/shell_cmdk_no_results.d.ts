export type LocalizedString = import('../runtime.js').LocalizedString;
export type Shell_Cmdk_No_ResultsInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No results for “{query}”." |
*
* @param {Shell_Cmdk_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const shell_cmdk_no_results: ((inputs: Shell_Cmdk_No_ResultsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_No_ResultsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
