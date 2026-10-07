export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Builds_MaxInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You can pick up to {max} builds." |
*
* @param {Upload_Game_Builds_MaxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_builds_max: ((inputs: Upload_Game_Builds_MaxInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_MaxInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
