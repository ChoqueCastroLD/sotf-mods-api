export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Request_FulfilledInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A mod you requested or voted for was published: {mod}" |
*
* @param {Emails_Notify_Item_Request_FulfilledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_request_fulfilled: ((inputs: Emails_Notify_Item_Request_FulfilledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Request_FulfilledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
