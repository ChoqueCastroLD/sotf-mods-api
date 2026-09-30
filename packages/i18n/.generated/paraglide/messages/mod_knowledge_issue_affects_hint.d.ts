export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Issue_Affects_HintInputs = {};
/**
* | output |
* | --- |
* | "Free text, for example “1.2.0 and older”." |
*
* @param {Mod_Knowledge_Issue_Affects_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_issue_affects_hint: ((inputs?: Mod_Knowledge_Issue_Affects_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issue_Affects_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
