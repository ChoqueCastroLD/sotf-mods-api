export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Reports_Title_OnInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Field reports on {build}" |
*
* @param {Ui_Domain_Reports_Title_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_reports_title_on: ((inputs: Ui_Domain_Reports_Title_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Reports_Title_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
