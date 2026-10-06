export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Reauth_Required_DetailInputs = {};
/**
* | output |
* | --- |
* | "This action needs a recent login. Log in again and then repeat it." |
*
* @param {Errors_Code_Reauth_Required_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_reauth_required_detail: ((inputs?: Errors_Code_Reauth_Required_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Reauth_Required_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
