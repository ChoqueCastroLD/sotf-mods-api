export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_App_LinksInputs = {};
/**
* | output |
* | --- |
* | "Mod and build pages on this site have an Install with launcher button that opens the manager on that mod." |
*
* @param {Manager_App_LinksInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_app_links: ((inputs?: Manager_App_LinksInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_App_LinksInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
