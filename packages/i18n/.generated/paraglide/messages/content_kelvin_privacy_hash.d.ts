export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Kelvin_Privacy_HashInputs = {};
/**
* | output |
* | --- |
* | "The chat id sent by the mod (it contains your Steam id and name) is stored only as an irreversible hash." |
*
* @param {Content_Kelvin_Privacy_HashInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_kelvin_privacy_hash: ((inputs?: Content_Kelvin_Privacy_HashInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_Privacy_HashInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
