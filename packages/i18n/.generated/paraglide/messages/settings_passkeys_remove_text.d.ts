export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Passkeys_Remove_TextInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Enter your password to remove {name}. You will no longer be able to log in with it." |
*
* @param {Settings_Passkeys_Remove_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_passkeys_remove_text: ((inputs: Settings_Passkeys_Remove_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Remove_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
