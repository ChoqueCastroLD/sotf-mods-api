export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Builds_SelectedInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Nothing selected" |
* | * | "one" | "{count__number} build selected" |
* | * | * | "{count__number} builds selected" |
*
* @param {Upload_Game_Builds_SelectedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_builds_selected: ((inputs: Upload_Game_Builds_SelectedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_SelectedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
