export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Settings_Removal_ErrorInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Write at least {min} characters." |
*
* @param {Basecamp_Settings_Removal_ErrorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_settings_removal_error: ((inputs: Basecamp_Settings_Removal_ErrorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Settings_Removal_ErrorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
