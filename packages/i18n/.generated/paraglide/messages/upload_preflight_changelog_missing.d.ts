export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Preflight_Changelog_MissingInputs = {};
/**
* | output |
* | --- |
* | "No changelog: followers like to know what changed." |
*
* @param {Upload_Preflight_Changelog_MissingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_preflight_changelog_missing: ((inputs?: Upload_Preflight_Changelog_MissingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Preflight_Changelog_MissingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
