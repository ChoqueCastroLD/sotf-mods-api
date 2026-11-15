export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_Faq_Safe_AInputs = {};
/**
* | output |
* | --- |
* | "Mods come only from SOTF Mods and RedLoader only from its official GitHub releases. The exe is not signed, so Windows SmartScreen may warn the first time: cl..." |
*
* @param {Manager_Faq_Safe_AInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_faq_safe_a: ((inputs?: Manager_Faq_Safe_AInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Faq_Safe_AInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
