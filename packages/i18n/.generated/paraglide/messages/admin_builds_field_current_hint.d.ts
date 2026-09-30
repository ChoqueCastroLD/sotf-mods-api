export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Field_Current_HintInputs = {};
/**
* | output |
* | --- |
* | "The build players are on now. Marking this one unmarks the previous one." |
*
* @param {Admin_Builds_Field_Current_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_field_current_hint: ((inputs?: Admin_Builds_Field_Current_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Current_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
