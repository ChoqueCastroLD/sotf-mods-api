export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Limits_DefaultInputs = {
    max: NonNullable<unknown>;
    seconds: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Default: {max} per {seconds__number} s" |
*
* @param {Admin_Limits_DefaultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_limits_default: ((inputs: Admin_Limits_DefaultInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_DefaultInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
