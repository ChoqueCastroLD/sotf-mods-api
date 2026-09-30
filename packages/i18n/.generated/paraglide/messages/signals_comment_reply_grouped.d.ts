export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Comment_Reply_GroupedInputs = {
    count: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} reply to your comment on {mod}" |
* | * | "{count__number} replies to your comment on {mod}" |
*
* @param {Signals_Comment_Reply_GroupedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_comment_reply_grouped: ((inputs: Signals_Comment_Reply_GroupedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_Reply_GroupedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
