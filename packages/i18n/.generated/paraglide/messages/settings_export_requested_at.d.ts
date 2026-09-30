export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Export_Requested_AtInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Requested {date}" |
*
* @param {Settings_Export_Requested_AtInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_export_requested_at: ((inputs: Settings_Export_Requested_AtInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Export_Requested_AtInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
