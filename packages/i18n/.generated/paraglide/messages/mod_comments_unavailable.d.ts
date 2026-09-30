export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Comments_UnavailableInputs = {};
/**
* | output |
* | --- |
* | "Comments couldn’t load right now. Reload the page to try again." |
*
* @param {Mod_Comments_UnavailableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_comments_unavailable: ((inputs?: Mod_Comments_UnavailableInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Comments_UnavailableInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
