export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_TruncatedInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The lists show the first {max} files of each group." |
*
* @param {Mod_Knowledge_Diff_TruncatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_truncated: ((inputs: Mod_Knowledge_Diff_TruncatedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_TruncatedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
