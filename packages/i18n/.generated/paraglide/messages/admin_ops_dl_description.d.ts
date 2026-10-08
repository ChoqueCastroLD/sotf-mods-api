export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Jobs that ran out of retries and are waiting for a decision. Retry sends them back to their queue with the same data. Discard removes them from this list and..." |
*
* @param {Admin_Ops_Dl_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_description: ((inputs?: Admin_Ops_Dl_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
