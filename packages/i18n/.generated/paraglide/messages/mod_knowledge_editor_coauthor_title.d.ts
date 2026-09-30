export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Editor_Coauthor_TitleInputs = {};
/**
* | output |
* | --- |
* | "You are a co-author" |
*
* @param {Mod_Knowledge_Editor_Coauthor_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_editor_coauthor_title: ((inputs?: Mod_Knowledge_Editor_Coauthor_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Editor_Coauthor_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
