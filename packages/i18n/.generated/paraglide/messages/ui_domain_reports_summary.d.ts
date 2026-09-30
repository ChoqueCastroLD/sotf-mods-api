export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Reports_SummaryInputs = {
    works: NonNullable<unknown>;
    partial: NonNullable<unknown>;
    broken: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Field reports: {works__number} work, {partial__number} partly, {broken__number} broken" |
*
* @param {Ui_Domain_Reports_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_reports_summary: ((inputs: Ui_Domain_Reports_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
