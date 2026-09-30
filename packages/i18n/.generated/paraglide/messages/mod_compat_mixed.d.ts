export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Compat_MixedInputs = {
    build: NonNullable<unknown>;
    works: NonNullable<unknown>;
    broken: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mixed reports on {build}: {works__number} ✔ · {broken__number} ✖" |
*
* @param {Mod_Compat_MixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_compat_mixed: ((inputs: Mod_Compat_MixedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_MixedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
