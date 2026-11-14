export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_Incompatible_RemoveInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Remove {name}" |
*
* @param {Basecamp_Compat_Incompatible_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_incompatible_remove: ((inputs: Basecamp_Compat_Incompatible_RemoveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_RemoveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
