export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Compat_AcknowledgedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The author of {mod} marked the problem you reported as fixed" |
*
* @param {Emails_Notify_Item_Compat_AcknowledgedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_compat_acknowledged: ((inputs: Emails_Notify_Item_Compat_AcknowledgedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_AcknowledgedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
