export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Version_Published_ManyInputs = {
    count: NonNullable<unknown>;
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{mod} has {count__number} new version, the latest is {version}" |
* | * | "{mod} has {count__number} new versions, the latest is {version}" |
*
* @param {Emails_Notify_Item_Version_Published_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_version_published_many: ((inputs: Emails_Notify_Item_Version_Published_ManyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Version_Published_ManyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
