export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_What_TextInputs = {
    author: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "KelvinSeek is a mod by {author}. It sends what you write to Kelvin to an AI service through the SOTF Mods API and turns the answer into Kelvin’s reply and, w..." |
*
* @param {Content_Kelvin_What_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_what_text: ((inputs: Content_Kelvin_What_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_What_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
