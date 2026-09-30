export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Search_Prompt_TextInputs = {};
/**
* | output |
* | --- |
* | "Search mods, builds, kits, creators and guides by name, author or manifest ID." |
*
* @param {Explore_Search_Prompt_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_search_prompt_text: ((inputs?: Explore_Search_Prompt_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Prompt_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
