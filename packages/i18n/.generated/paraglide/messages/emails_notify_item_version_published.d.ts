export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Version_PublishedInputs = {
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} was updated to {version}" |
*
* @param {Emails_Notify_Item_Version_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_version_published: ((inputs: Emails_Notify_Item_Version_PublishedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Version_PublishedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
