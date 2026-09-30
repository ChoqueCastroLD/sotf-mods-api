export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Drafts_IntroInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Autosaved as you go. Up to {max} drafts at a time." |
*
* @param {Upload_Drafts_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_drafts_intro: ((inputs: Upload_Drafts_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
