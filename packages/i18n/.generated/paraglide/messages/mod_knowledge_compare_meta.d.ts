export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Compare_MetaInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "What changed between two versions of {name}: files, manifest and changelog." |
*
* @param {Mod_Knowledge_Compare_MetaInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_compare_meta: ((inputs: Mod_Knowledge_Compare_MetaInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Compare_MetaInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
