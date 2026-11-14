export type LocalizedString = import('../runtime.js').LocalizedString;
export type Manager_LeadInputs = {};
/**
* | output |
* | --- |
* | "Install any mod from SOTF Mods in one click, get whole modpacks, keep everything updated and switch between mod profiles. It also installs RedLoader for you." |
*
* @param {Manager_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const manager_lead: ((inputs?: Manager_LeadInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_LeadInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
