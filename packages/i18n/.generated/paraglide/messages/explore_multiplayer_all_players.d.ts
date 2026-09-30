export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Multiplayer_All_PlayersInputs = {};
/**
* | output |
* | --- |
* | "Everyone needs it" |
*
* @param {Explore_Multiplayer_All_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_multiplayer_all_players: ((inputs?: Explore_Multiplayer_All_PlayersInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Multiplayer_All_PlayersInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
