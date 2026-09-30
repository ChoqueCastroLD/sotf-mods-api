export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Pinned_TextInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Choose up to {max__number} of your mods to show first on your profile, in this order." |
*
* @param {Settings_Pinned_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_pinned_text: ((inputs: Settings_Pinned_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Pinned_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
