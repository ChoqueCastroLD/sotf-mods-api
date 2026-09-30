export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Kit_CommentInputs = {
    actor: NonNullable<unknown>;
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} commented on your kit “{kit}”" |
*
* @param {Signals_Kit_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_kit_comment: ((inputs: Signals_Kit_CommentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_CommentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
