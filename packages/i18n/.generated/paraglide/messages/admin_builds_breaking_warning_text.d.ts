export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Breaking_Warning_TextInputs = {};
/**
* | output |
* | --- |
* | "Saving a breaking build shows the patch banner, signals every creator and marks older mods as possibly outdated." |
*
* @param {Admin_Builds_Breaking_Warning_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_breaking_warning_text: ((inputs?: Admin_Builds_Breaking_Warning_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Breaking_Warning_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
