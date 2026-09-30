export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Passkeys_Last_UsedInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Last used {when}" |
*
* @param {Settings_Passkeys_Last_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_passkeys_last_used: ((inputs: Settings_Passkeys_Last_UsedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_Last_UsedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
