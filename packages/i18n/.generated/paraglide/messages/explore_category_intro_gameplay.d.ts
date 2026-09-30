export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Category_Intro_GameplayInputs = {};
/**
* | output |
* | --- |
* | "Mods that change how the game plays: difficulty, combat, enemies, survival rules and new mechanics." |
*
* @param {Explore_Category_Intro_GameplayInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_category_intro_gameplay: ((inputs?: Explore_Category_Intro_GameplayInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_GameplayInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
