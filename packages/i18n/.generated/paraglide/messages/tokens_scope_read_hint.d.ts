export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Scope_Read_HintInputs = {};
/**
* | output |
* | --- |
* | "See your private data, such as your account, follows and notifications, and use read endpoints." |
*
* @param {Tokens_Scope_Read_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_scope_read_hint: ((inputs?: Tokens_Scope_Read_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Read_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
