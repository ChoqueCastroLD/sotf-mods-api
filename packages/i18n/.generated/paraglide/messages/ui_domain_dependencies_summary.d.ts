export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Dependencies_SummaryInputs = {
    required: NonNullable<unknown>;
    optional: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{required__number} required · {optional__number} optional" |
*
* @param {Ui_Domain_Dependencies_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_dependencies_summary: ((inputs: Ui_Domain_Dependencies_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Dependencies_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
