export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Shared_NoneInputs = {};
/**
* | output |
* | --- |
* | "You have no mods shared with you yet." |
*
* @param {Mod_Knowledge_Shared_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_shared_none: ((inputs?: Mod_Knowledge_Shared_NoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_NoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
