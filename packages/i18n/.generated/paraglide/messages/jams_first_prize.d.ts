export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_First_PrizeInputs = {};
/**
* | output |
* | --- |
* | "Every entry is listed on the jam page. The top entries in each category are announced with the results." |
*
* @param {Jams_First_PrizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_first_prize: ((inputs?: Jams_First_PrizeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_First_PrizeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
