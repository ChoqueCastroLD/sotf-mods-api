export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Sign_In_To_CommentInputs = {};
/**
* | output |
* | --- |
* | "Sign in to join the conversation." |
*
* @param {Kitsocial_Sign_In_To_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_sign_in_to_comment: ((inputs?: Kitsocial_Sign_In_To_CommentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Sign_In_To_CommentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
