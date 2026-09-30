export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Verify_ResentInputs = {
    email: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "We sent a new link to {email}" |
*
* @param {Settings_Verify_ResentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_verify_resent: ((inputs: Settings_Verify_ResentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Verify_ResentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
