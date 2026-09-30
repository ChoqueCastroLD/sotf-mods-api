export type LocalizedString = import('../runtime.js').LocalizedString;
export type Settings_Links_TextInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {max__number} links on your profile: your site, channels and where people can support you." |
*
* @param {Settings_Links_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const settings_links_text: ((inputs: Settings_Links_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Links_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
