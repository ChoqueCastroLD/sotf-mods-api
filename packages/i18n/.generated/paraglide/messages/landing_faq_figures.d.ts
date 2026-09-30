export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Faq_FiguresInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Figures as of {date}." |
*
* @param {Landing_Faq_FiguresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_faq_figures: ((inputs: Landing_Faq_FiguresInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Faq_FiguresInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
