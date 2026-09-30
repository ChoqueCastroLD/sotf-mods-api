export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Create_With_ModInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} will be its first item." |
*
* @param {Kits_Create_With_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_create_with_mod: ((inputs: Kits_Create_With_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Create_With_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
