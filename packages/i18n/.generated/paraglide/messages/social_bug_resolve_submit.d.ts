export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Bug_Resolve_SubmitInputs = {};
/**
* | output |
* | --- |
* | "Mark as fixed" |
*
* @param {Social_Bug_Resolve_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_bug_resolve_submit: ((inputs?: Social_Bug_Resolve_SubmitInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Bug_Resolve_SubmitInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
