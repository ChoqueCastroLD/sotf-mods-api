export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tpl_Filter_AllInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "All ({count})" |
*
* @param {Admin_Tpl_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tpl_filter_all: ((inputs: Admin_Tpl_Filter_AllInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Filter_AllInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
