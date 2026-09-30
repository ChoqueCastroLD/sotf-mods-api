export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_Files_SummaryInputs = {
    added: NonNullable<unknown>;
    removed: NonNullable<unknown>;
    changed: NonNullable<unknown>;
    unchanged: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{added} added, {removed} removed, {changed} changed, {unchanged} unchanged." |
*
* @param {Mod_Knowledge_Diff_Files_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_files_summary: ((inputs: Mod_Knowledge_Diff_Files_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Files_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
