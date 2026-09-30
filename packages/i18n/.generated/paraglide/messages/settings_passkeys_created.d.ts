export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Passkeys_CreatedInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Added {date}" |
*
* @param {Settings_Passkeys_CreatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_passkeys_created: ((inputs: Settings_Passkeys_CreatedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Passkeys_CreatedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
