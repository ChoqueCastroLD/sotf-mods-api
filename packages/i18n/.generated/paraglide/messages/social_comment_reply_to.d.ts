export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Comment_Reply_ToInputs = {
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Replying to @{handle}" |
*
* @param {Social_Comment_Reply_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_comment_reply_to: ((inputs: Social_Comment_Reply_ToInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_Reply_ToInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
