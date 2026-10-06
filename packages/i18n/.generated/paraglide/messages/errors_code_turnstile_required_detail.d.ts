export type LocalizedString = import('../runtime.js').LocalizedString;
export type Errors_Code_Turnstile_Required_DetailInputs = {};
/**
* | output |
* | --- |
* | "Complete the security check to confirm you’re not a bot, then try again." |
*
* @param {Errors_Code_Turnstile_Required_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const errors_code_turnstile_required_detail: ((inputs?: Errors_Code_Turnstile_Required_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Turnstile_Required_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
