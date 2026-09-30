export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Issue_AffectsInputs = {
    versions: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Affects: {versions}" |
*
* @param {Mod_Knowledge_Issue_AffectsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_issue_affects: ((inputs: Mod_Knowledge_Issue_AffectsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_AffectsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
