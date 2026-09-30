export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Yank_Reason_ErrorInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Write at least {min} characters." |
*
* @param {Basecamp_Versions_Yank_Reason_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_yank_reason_error: ((inputs: Basecamp_Versions_Yank_Reason_ErrorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_Reason_ErrorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
