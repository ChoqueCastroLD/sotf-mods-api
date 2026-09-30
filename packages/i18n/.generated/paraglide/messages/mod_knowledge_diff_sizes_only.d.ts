export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_Sizes_OnlyInputs = {};
/**
* | output |
* | --- |
* | "One of the archives was inspected without checksums, so files are compared by size only: a file that changed without changing size will not appear." |
*
* @param {Mod_Knowledge_Diff_Sizes_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_sizes_only: ((inputs?: Mod_Knowledge_Diff_Sizes_OnlyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Sizes_OnlyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
