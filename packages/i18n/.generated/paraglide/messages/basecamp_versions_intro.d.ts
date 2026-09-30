export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_IntroInputs = {};
/**
* | output |
* | --- |
* | "Every version you released, including those in review. Yank a version to warn players away from it: its link keeps working with a warning." |
*
* @param {Basecamp_Versions_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_intro: ((inputs?: Basecamp_Versions_IntroInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_IntroInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
