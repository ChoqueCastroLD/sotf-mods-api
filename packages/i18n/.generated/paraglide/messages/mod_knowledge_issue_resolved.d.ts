export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Issue_ResolvedInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Resolved on {date}" |
*
* @param {Mod_Knowledge_Issue_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_issue_resolved: ((inputs: Mod_Knowledge_Issue_ResolvedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_ResolvedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
