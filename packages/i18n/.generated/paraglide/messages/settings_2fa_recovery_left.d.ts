export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_2fa_Recovery_LeftInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Recovery codes left: {count}" |
*
* @param {Settings_2fa_Recovery_LeftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_2fa_recovery_left: ((inputs: Settings_2fa_Recovery_LeftInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Recovery_LeftInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
