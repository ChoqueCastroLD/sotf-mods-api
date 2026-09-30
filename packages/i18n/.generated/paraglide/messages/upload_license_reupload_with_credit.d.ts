export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_License_Reupload_With_CreditInputs = {};
/**
* | output |
* | --- |
* | "Re-upload allowed with credit" |
*
* @param {Upload_License_Reupload_With_CreditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_license_reupload_with_credit: ((inputs?: Upload_License_Reupload_With_CreditInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_License_Reupload_With_CreditInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
