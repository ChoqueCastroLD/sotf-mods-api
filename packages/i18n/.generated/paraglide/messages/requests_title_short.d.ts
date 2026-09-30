export type LocalizedString = import('../runtime.js').LocalizedString;
export type Requests_Title_ShortInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The title needs at least {min__number} characters." |
*
* @param {Requests_Title_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const requests_title_short: ((inputs: Requests_Title_ShortInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Title_ShortInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
