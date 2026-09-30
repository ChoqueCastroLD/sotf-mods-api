export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_Detail_DescriptionInputs = {
    author: NonNullable<unknown>;
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mod request by {author}: {title}" |
*
* @param {Requests_Detail_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_detail_description: ((inputs: Requests_Detail_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Detail_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
