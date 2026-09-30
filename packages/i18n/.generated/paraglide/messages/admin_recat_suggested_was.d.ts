export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Suggested_WasInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Suggested: {name}" |
*
* @param {Admin_Recat_Suggested_WasInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_suggested_was: ((inputs: Admin_Recat_Suggested_WasInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Suggested_WasInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
