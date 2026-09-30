export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Faq_AnswerInputs = {};
/**
* | output |
* | --- |
* | "Answer" |
*
* @param {Mod_Knowledge_Faq_AnswerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_faq_answer: ((inputs?: Mod_Knowledge_Faq_AnswerInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_AnswerInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
