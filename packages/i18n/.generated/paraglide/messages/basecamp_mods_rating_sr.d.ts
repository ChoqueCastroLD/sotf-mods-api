export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Mods_Rating_SrInputs = {
    rating: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Rated {rating} out of 5" |
*
* @param {Basecamp_Mods_Rating_SrInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_mods_rating_sr: ((inputs: Basecamp_Mods_Rating_SrInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Rating_SrInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
