export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Kit_Picks_EmptyInputs = {};
/**
* | output |
* | --- |
* | "No public kits yet." |
*
* @param {Admin_Kit_Picks_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_kit_picks_empty: ((inputs?: Admin_Kit_Picks_EmptyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kit_Picks_EmptyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
