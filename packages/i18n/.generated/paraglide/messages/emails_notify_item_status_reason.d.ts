export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Status_ReasonInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Reason: {reason}" |
*
* @param {Emails_Notify_Item_Status_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_status_reason: ((inputs: Emails_Notify_Item_Status_ReasonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Status_ReasonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
