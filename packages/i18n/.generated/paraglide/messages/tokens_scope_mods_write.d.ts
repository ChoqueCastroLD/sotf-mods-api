export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Scope_Mods_WriteInputs = {};
/**
* | output |
* | --- |
* | "Manage mods" |
*
* @param {Tokens_Scope_Mods_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_scope_mods_write: ((inputs?: Tokens_Scope_Mods_WriteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Mods_WriteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
