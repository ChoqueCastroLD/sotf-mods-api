export type LocalizedString = import('../runtime.js').LocalizedString;
export type Cmdk_Scope_RemoveInputs = {
    scope: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Search everything again (remove “{scope}”)" |
*
* @param {Cmdk_Scope_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const cmdk_scope_remove: ((inputs: Cmdk_Scope_RemoveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scope_RemoveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
