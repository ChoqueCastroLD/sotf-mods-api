export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Hooks_Url_HintInputs = {};
/**
* | output |
* | --- |
* | "https://discord.com/api/webhooks/…" |
*
* @param {Admin_Hooks_Url_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_hooks_url_hint: ((inputs?: Admin_Hooks_Url_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Url_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
