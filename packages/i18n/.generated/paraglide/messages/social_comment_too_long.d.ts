export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Comment_Too_LongInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Keep it under {max} characters." |
*
* @param {Social_Comment_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_comment_too_long: ((inputs: Social_Comment_Too_LongInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Too_LongInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
