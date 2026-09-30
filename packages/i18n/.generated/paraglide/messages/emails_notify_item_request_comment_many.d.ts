export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Request_Comment_ManyInputs = {
    count: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment on the request “{request}”" |
* | * | "{count__number} new comments on the request “{request}”" |
*
* @param {Emails_Notify_Item_Request_Comment_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_request_comment_many: ((inputs: Emails_Notify_Item_Request_Comment_ManyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Request_Comment_ManyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
