export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Traffic_Manager_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Installs seen each day (by their requests to the site), their downloads and the clicks on the download links." |
*
* @param {Admin_Traffic_Manager_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_traffic_manager_description: ((inputs?: Admin_Traffic_Manager_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
