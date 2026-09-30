export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Review_ReplyInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The author of {mod} replied to your review" |
*
* @param {Emails_Notify_Item_Review_ReplyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_review_reply: ((inputs: Emails_Notify_Item_Review_ReplyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_ReplyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
