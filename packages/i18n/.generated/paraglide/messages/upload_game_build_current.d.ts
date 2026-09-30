export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Game_Build_CurrentInputs = {
    label: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{label} (current)" |
*
* @param {Upload_Game_Build_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_game_build_current: ((inputs: Upload_Game_Build_CurrentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Game_Build_CurrentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
