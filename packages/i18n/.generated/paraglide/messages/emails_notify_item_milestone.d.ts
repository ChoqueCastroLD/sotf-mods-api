export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_MilestoneInputs = {
    mod: NonNullable<unknown>;
    threshold: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} passed {threshold__number} downloads" |
*
* @param {Emails_Notify_Item_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_milestone: ((inputs: Emails_Notify_Item_MilestoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_MilestoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
