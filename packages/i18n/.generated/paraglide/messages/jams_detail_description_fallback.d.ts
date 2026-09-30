export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Detail_Description_FallbackInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{title}: a Sons of the Forest Mod Jam. See the theme, the entries and the results." |
*
* @param {Jams_Detail_Description_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_detail_description_fallback: ((inputs: Jams_Detail_Description_FallbackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Detail_Description_FallbackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
