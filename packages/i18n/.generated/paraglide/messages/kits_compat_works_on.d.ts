export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Compat_Works_OnInputs = {
    works: NonNullable<unknown>;
    total: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{works}/{total} work on {build}" |
*
* @param {Kits_Compat_Works_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_compat_works_on: ((inputs: Kits_Compat_Works_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_Works_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
