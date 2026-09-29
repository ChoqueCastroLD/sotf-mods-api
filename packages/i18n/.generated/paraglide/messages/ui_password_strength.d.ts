export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Password_StrengthInputs = {
    level: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Password strength: {level}" |
*
* @param {Ui_Password_StrengthInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_password_strength: ((inputs: Ui_Password_StrengthInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Password_StrengthInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
