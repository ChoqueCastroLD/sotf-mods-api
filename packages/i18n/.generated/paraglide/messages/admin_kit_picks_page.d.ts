export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kit_Picks_PageInputs = {
    page: NonNullable<unknown>;
    pages: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Page {page} of {pages}" |
*
* @param {Admin_Kit_Picks_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kit_picks_page: ((inputs: Admin_Kit_Picks_PageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_PageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
