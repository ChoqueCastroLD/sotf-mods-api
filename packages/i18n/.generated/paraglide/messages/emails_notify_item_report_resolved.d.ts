export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Report_ResolvedInputs = {
    action: NonNullable<unknown>;
};
/**
* | action | output |
* | --- | --- |
* | "resolve" | "Your report was reviewed and the moderators took action" |
* | * | "Your report was reviewed: no action was needed" |
*
* @param {Emails_Notify_Item_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_report_resolved: ((inputs: Emails_Notify_Item_Report_ResolvedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Report_ResolvedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
