export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Sessions_Confirm_TextInputs = {
    device: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{device} will need to sign in again." |
*
* @param {Settings_Sessions_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_sessions_confirm_text: ((inputs: Settings_Sessions_Confirm_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Sessions_Confirm_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
