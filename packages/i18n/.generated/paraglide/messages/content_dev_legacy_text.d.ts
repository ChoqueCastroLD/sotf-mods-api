export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Dev_Legacy_TextInputs = {};
/**
* | output |
* | --- |
* | "The API of the first version of the site still answers on api.sotf-mods.com/api/* and sotf-mods.com/api/*, so RedManager, UpdatesChecker and in-game mods kee..." |
*
* @param {Content_Dev_Legacy_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_dev_legacy_text: ((inputs?: Content_Dev_Legacy_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Dev_Legacy_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
