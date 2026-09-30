export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Rating_Out_OfInputs = {
    rating: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Rated {rating} out of 5" |
*
* @param {Ui_Domain_Rating_Out_OfInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_rating_out_of: ((inputs: Ui_Domain_Rating_Out_OfInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Rating_Out_OfInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
