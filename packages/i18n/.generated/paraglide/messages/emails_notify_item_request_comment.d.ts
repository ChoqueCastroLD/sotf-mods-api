export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Request_CommentInputs = {
    actor: NonNullable<unknown>;
    request: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} commented on the request “{request}”" |
*
* @param {Emails_Notify_Item_Request_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_request_comment: ((inputs: Emails_Notify_Item_Request_CommentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Request_CommentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
