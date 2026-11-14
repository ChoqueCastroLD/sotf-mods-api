export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Traffic_SummaryInputs = {
    members: NonNullable<unknown>;
    perVisitor: NonNullable<unknown>;
    clicks: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Members make {members} of the views · {perVisitor} pages per visitor · {clicks} clicks on «Download» of the manager" |
*
* @param {Admin_Traffic_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_traffic_summary: ((inputs: Admin_Traffic_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
