export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Radar_Legend_TextInputs = {
    min: NonNullable<unknown>;
    works: NonNullable<unknown>;
    broken: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Reports are weighted: the author’s own test counts double, verified creators 1.5×, brand-new accounts half. Below {min__number} weighted reports a mod stays ..." |
*
* @param {Content_Radar_Legend_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_radar_legend_text: ((inputs: Content_Radar_Legend_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Legend_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
