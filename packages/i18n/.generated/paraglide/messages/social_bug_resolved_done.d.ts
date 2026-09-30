export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Bug_Resolved_DoneInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Marked as fixed in {version}." |
*
* @param {Social_Bug_Resolved_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_bug_resolved_done: ((inputs: Social_Bug_Resolved_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolved_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
