export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Editor_Coauthor_TextInputs = {
    owner: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You can release versions and edit the known issues and FAQ. The listing, media and status stay with {owner}." |
*
* @param {Mod_Knowledge_Editor_Coauthor_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_editor_coauthor_text: ((inputs: Mod_Knowledge_Editor_Coauthor_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Editor_Coauthor_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
