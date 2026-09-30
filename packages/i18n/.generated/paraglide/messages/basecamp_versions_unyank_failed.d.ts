export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Unyank_FailedInputs = {};
/**
* | output |
* | --- |
* | "The yank could not be undone" |
*
* @param {Basecamp_Versions_Unyank_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_unyank_failed: ((inputs?: Basecamp_Versions_Unyank_FailedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Unyank_FailedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
