export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Builds_LatestInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Add latest ({label})" |
*
* @param {Upload_Game_Builds_LatestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_builds_latest: ((inputs: Upload_Game_Builds_LatestInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_LatestInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
