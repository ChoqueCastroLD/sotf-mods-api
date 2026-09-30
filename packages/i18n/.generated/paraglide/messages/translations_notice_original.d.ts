export type LocalizedString = import('../runtime.js').LocalizedString;
export type Translations_Notice_OriginalInputs = {
    language: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Original text in {language}" |
*
* @param {Translations_Notice_OriginalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const translations_notice_original: ((inputs: Translations_Notice_OriginalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Notice_OriginalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
