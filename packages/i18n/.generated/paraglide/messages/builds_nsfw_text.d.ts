export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Nsfw_TextInputs = {};
/**
* | output |
* | --- |
* | "The creator marked this build as NSFW. Its pictures are hidden until you choose to see them." |
*
* @param {Builds_Nsfw_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_nsfw_text: ((inputs?: Builds_Nsfw_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Nsfw_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
