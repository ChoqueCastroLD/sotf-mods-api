export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Diff_SummaryInputs = {
    added: NonNullable<unknown>;
    removed: NonNullable<unknown>;
    changed: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Compared with the previous version: {added} added, {removed} removed, {changed} changed." |
*
* @param {Ranger_Diff_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_diff_summary: ((inputs: Ranger_Diff_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
