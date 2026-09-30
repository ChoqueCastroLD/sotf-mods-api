export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Field_Breaking_HintInputs = {};
/**
* | output |
* | --- |
* | "The patch broke mods (new game version for RedLoader, changed assemblies…)." |
*
* @param {Admin_Builds_Field_Breaking_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_field_breaking_hint: ((inputs?: Admin_Builds_Field_Breaking_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Breaking_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
