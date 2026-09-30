export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Meta_ExpiresInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Expires {date}" |
*
* @param {Tokens_Meta_ExpiresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_meta_expires: ((inputs: Tokens_Meta_ExpiresInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_ExpiresInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
