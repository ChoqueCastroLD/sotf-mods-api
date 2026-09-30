export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ads_Error_ClientInputs = {};
/**
* | output |
* | --- |
* | "Use ca-pub- followed by 10 to 20 digits." |
*
* @param {Admin_Ads_Error_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ads_error_client: ((inputs?: Admin_Ads_Error_ClientInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Error_ClientInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
