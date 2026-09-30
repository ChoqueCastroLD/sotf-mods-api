export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Rum_SummaryInputs = {
    templates: NonNullable<unknown>;
    samples: NonNullable<unknown>;
};
/**
* | templates__plural | output |
* | --- | --- |
* | "one" | "{templates__number} template · {samples} samples" |
* | * | "{templates__number} templates · {samples} samples" |
*
* @param {Admin_Rum_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_rum_summary: ((inputs: Admin_Rum_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
