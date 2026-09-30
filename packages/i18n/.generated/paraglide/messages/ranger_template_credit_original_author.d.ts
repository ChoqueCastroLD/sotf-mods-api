export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Template_Credit_Original_AuthorInputs = {};
/**
* | output |
* | --- |
* | "Please credit the original author and link their work." |
*
* @param {Ranger_Template_Credit_Original_AuthorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_template_credit_original_author: ((inputs?: Ranger_Template_Credit_Original_AuthorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Template_Credit_Original_AuthorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
