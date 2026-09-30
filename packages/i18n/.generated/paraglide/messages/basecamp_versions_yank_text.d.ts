export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Yank_TextInputs = {};
/**
* | output |
* | --- |
* | "Players see a warning on this version and the latest good one is offered instead. You can undo it later." |
*
* @param {Basecamp_Versions_Yank_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_yank_text: ((inputs?: Basecamp_Versions_Yank_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
