export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Issue_Fixed_InInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Fixed in {version}" |
*
* @param {Mod_Knowledge_Issue_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_issue_fixed_in: ((inputs: Mod_Knowledge_Issue_Fixed_InInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Fixed_InInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
