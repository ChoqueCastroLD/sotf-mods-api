export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_First_TextInputs = {};
/**
* | output |
* | --- |
* | "A themed build-off for the whole community: a theme, a few days to make something new, then everyone votes. The date will be announced here first." |
*
* @param {Jams_First_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_first_text: ((inputs?: Jams_First_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
