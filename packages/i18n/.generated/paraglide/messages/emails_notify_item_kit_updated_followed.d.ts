export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Kit_Updated_FollowedInputs = {
    kit: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The kit {kit} you follow was updated" |
*
* @param {Emails_Notify_Item_Kit_Updated_FollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_kit_updated_followed: ((inputs: Emails_Notify_Item_Kit_Updated_FollowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_Updated_FollowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
