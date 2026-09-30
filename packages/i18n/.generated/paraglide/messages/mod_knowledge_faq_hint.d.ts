export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Faq_HintInputs = {};
/**
* | output |
* | --- |
* | "Questions players ask often. Your answers appear on the mod page above the automatic ones and are included in search results." |
*
* @param {Mod_Knowledge_Faq_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_faq_hint: ((inputs?: Mod_Knowledge_Faq_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
