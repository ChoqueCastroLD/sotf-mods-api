export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Builds_None_FoundInputs = {
    query: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No build matches “{query}”." |
*
* @param {Upload_Game_Builds_None_FoundInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_builds_none_found: ((inputs: Upload_Game_Builds_None_FoundInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Builds_None_FoundInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
