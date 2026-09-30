export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Editor_Tab_VersionsInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Versions ({count})" |
*
* @param {Basecamp_Editor_Tab_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_editor_tab_versions: ((inputs: Basecamp_Editor_Tab_VersionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Tab_VersionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
