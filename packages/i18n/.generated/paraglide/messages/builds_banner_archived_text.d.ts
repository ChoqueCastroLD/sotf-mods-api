export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Banner_Archived_TextInputs = {};
/**
* | output |
* | --- |
* | "The builder no longer updates this build. It may not place correctly with recent BuildShare versions." |
*
* @param {Builds_Banner_Archived_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_banner_archived_text: ((inputs?: Builds_Banner_Archived_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Archived_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
