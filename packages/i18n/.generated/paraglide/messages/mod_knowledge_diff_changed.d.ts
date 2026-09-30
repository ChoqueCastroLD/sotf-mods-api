export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_ChangedInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changed files ({count})" |
*
* @param {Mod_Knowledge_Diff_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_changed: ((inputs: Mod_Knowledge_Diff_ChangedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_ChangedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
