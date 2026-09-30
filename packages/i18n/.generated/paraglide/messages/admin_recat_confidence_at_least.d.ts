export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Confidence_At_LeastInputs = {
    value: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "At least {value}" |
*
* @param {Admin_Recat_Confidence_At_LeastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_confidence_at_least: ((inputs: Admin_Recat_Confidence_At_LeastInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Confidence_At_LeastInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
