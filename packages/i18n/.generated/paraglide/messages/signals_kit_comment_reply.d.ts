export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Kit_Comment_ReplyInputs = {
    actor: NonNullable<unknown>;
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} replied to your comment on the kit “{kit}”" |
*
* @param {Signals_Kit_Comment_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_kit_comment_reply: ((inputs: Signals_Kit_Comment_ReplyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Kit_Comment_ReplyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
