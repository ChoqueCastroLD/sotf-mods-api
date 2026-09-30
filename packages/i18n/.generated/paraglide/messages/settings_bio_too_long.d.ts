export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Bio_Too_LongInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Keep your bio under {max__number} characters." |
*
* @param {Settings_Bio_Too_LongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_bio_too_long: ((inputs: Settings_Bio_Too_LongInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Bio_Too_LongInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
