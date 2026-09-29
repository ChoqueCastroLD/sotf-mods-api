export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Review_Changes_RequestedInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A ranger asked for changes: {reason}" |
*
* @param {Common_Review_Changes_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_review_changes_requested: ((inputs: Common_Review_Changes_RequestedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Review_Changes_RequestedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
