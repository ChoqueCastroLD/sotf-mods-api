export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Awards_Kind_Staff_PickInputs = {};
/**
* | output |
* | --- |
* | "Staff pick" |
*
* @param {Admin_Awards_Kind_Staff_PickInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_awards_kind_staff_pick: ((inputs?: Admin_Awards_Kind_Staff_PickInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Kind_Staff_PickInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
