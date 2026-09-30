export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Avatar_HintInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "PNG, JPEG, WebP, AVIF or GIF up to {max__number} MB. You can crop it before it is saved." |
*
* @param {Settings_Avatar_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_avatar_hint: ((inputs: Settings_Avatar_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Avatar_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
