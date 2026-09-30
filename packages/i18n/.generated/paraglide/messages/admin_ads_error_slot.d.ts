export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ads_Error_SlotInputs = {};
/**
* | output |
* | --- |
* | "Slot IDs are 6 to 20 digits." |
*
* @param {Admin_Ads_Error_SlotInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ads_error_slot: ((inputs?: Admin_Ads_Error_SlotInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Error_SlotInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
