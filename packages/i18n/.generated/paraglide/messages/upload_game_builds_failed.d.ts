export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Builds_FailedInputs = {};
/**
* | output |
* | --- |
* | "The game builds couldn’t be loaded. You can continue and add them later from the mod editor." |
*
* @param {Upload_Game_Builds_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_builds_failed: ((inputs?: Upload_Game_Builds_FailedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_FailedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
