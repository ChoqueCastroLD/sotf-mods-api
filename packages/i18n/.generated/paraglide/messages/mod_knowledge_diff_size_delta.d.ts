export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_Size_DeltaInputs = {
    delta: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Download size change: {delta}" |
*
* @param {Mod_Knowledge_Diff_Size_DeltaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_size_delta: ((inputs: Mod_Knowledge_Diff_Size_DeltaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_Size_DeltaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
