export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Changelog_SavedInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changelog of v{version} saved." |
*
* @param {Basecamp_Versions_Changelog_SavedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_changelog_saved: ((inputs: Basecamp_Versions_Changelog_SavedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Changelog_SavedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
