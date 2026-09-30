export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Tag_Group_PlayersInputs = {};
/**
* | output |
* | --- |
* | "Players" |
*
* @param {Explore_Tag_Group_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_tag_group_players: ((inputs?: Explore_Tag_Group_PlayersInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_PlayersInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
