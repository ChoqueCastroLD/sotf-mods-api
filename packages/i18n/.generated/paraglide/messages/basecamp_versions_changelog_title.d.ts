export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Changelog_TitleInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changelog of v{version}" |
*
* @param {Basecamp_Versions_Changelog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_changelog_title: ((inputs: Basecamp_Versions_Changelog_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
