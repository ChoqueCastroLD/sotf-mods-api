export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Capsule_Loader_ShortInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "RedLoader {version}+" |
*
* @param {Mod_Capsule_Loader_ShortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_capsule_loader_short: ((inputs: Mod_Capsule_Loader_ShortInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Capsule_Loader_ShortInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
