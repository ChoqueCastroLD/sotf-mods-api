export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Category_Intro_Model_SwapInputs = {};
/**
* | output |
* | --- |
* | "Replace in-game models with new ones: characters, creatures, weapons and props." |
*
* @param {Explore_Category_Intro_Model_SwapInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_category_intro_model_swap: ((inputs?: Explore_Category_Intro_Model_SwapInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Model_SwapInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
