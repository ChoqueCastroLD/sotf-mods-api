export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Legacy_Kelvin_TextInputs = {};
/**
* | output |
* | --- |
* | "When the language model is unavailable (no key, timeout or daily budget spent) /api/kelvinseek/prompt does not fail: it answers with the legacy deterministic..." |
*
* @param {Content_Dev_Legacy_Kelvin_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_legacy_kelvin_text: ((inputs?: Content_Dev_Legacy_Kelvin_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_Kelvin_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
