export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Compat_Author_TestedInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Tested by the creator on {build}." |
*
* @param {Mod_Compat_Author_TestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_compat_author_tested: ((inputs: Mod_Compat_Author_TestedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Compat_Author_TestedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
