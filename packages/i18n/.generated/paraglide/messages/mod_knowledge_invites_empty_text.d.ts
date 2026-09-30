export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Invites_Empty_TextInputs = {};
/**
* | output |
* | --- |
* | "When a creator invites you to co-author a mod, it shows up here." |
*
* @param {Mod_Knowledge_Invites_Empty_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_invites_empty_text: ((inputs?: Mod_Knowledge_Invites_Empty_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_Empty_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
