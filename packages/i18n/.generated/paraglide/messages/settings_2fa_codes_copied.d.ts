export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_2fa_Codes_CopiedInputs = {};
/**
* | output |
* | --- |
* | "Recovery codes copied." |
*
* @param {Settings_2fa_Codes_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_2fa_codes_copied: ((inputs?: Settings_2fa_Codes_CopiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_CopiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
