export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Password_TextInputs = {
    min: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "At least {min__number} characters. A long phrase is easier to remember and harder to guess." |
*
* @param {Settings_Password_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_password_text: ((inputs: Settings_Password_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
