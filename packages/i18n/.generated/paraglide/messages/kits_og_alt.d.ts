export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Og_AltInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name}, a Sons of the Forest mod kit on SOTF Mods" |
*
* @param {Kits_Og_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_og_alt: ((inputs: Kits_Og_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Og_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
