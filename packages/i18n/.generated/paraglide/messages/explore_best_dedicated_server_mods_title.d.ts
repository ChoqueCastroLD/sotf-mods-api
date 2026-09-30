export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Best_Dedicated_Server_Mods_TitleInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Best SOTF dedicated server mods ({count__number})" |
*
* @param {Explore_Best_Dedicated_Server_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_best_dedicated_server_mods_title: ((inputs: Explore_Best_Dedicated_Server_Mods_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Dedicated_Server_Mods_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
