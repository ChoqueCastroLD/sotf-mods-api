export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Kit_Comment_ReplyInputs = {
    actor: NonNullable<unknown>;
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} replied to your comment on the kit {kit}" |
*
* @param {Emails_Notify_Item_Kit_Comment_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_kit_comment_reply: ((inputs: Emails_Notify_Item_Kit_Comment_ReplyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_Comment_ReplyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
