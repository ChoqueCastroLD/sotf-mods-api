export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Brand_Dont_GameInputs = {};
/**
* | output |
* | --- |
* | "Combine it with the game’s official logo, key art or character names." |
*
* @param {Content_Brand_Dont_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_brand_dont_game: ((inputs?: Content_Brand_Dont_GameInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_GameInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
