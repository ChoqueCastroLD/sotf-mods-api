export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Target_ForInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "New category for {name}" |
*
* @param {Admin_Recat_Target_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_target_for: ((inputs: Admin_Recat_Target_ForInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Target_ForInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
