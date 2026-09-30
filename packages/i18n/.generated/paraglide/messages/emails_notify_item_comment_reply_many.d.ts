export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Comment_Reply_ManyInputs = {
    count: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new reply to your comment on {mod}" |
* | * | "{count__number} new replies to your comment on {mod}" |
*
* @param {Emails_Notify_Item_Comment_Reply_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_comment_reply_many: ((inputs: Emails_Notify_Item_Comment_Reply_ManyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Comment_Reply_ManyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
