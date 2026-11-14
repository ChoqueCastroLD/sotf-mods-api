export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_Incompatible_AddInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mark {name} as incompatible" |
*
* @param {Basecamp_Compat_Incompatible_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_incompatible_add: ((inputs: Basecamp_Compat_Incompatible_AddInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_AddInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
