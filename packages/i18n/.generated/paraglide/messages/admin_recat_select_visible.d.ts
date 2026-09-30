export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Select_VisibleInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Select the {count} rows shown" |
*
* @param {Admin_Recat_Select_VisibleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_select_visible: ((inputs: Admin_Recat_Select_VisibleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Select_VisibleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
