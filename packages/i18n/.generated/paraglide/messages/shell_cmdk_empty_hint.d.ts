export type LocalizedString = import('../runtime.js').LocalizedString;
export type Shell_Cmdk_Empty_HintInputs = {};
/**
* | output |
* | --- |
* | "Try fewer words, or narrow it down with mods:, builds:, @user, > for commands or by:/cat:/sort:." |
*
* @param {Shell_Cmdk_Empty_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const shell_cmdk_empty_hint: ((inputs?: Shell_Cmdk_Empty_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Empty_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
