export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Builds_Sort_Label_DescInputs = {};
/**
* | output |
* | --- |
* | "Label Z to A" |
*
* @param {Admin_Builds_Sort_Label_DescInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_builds_sort_label_desc: ((inputs?: Admin_Builds_Sort_Label_DescInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Sort_Label_DescInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
