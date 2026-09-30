export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Announce_AddedInputs = {
    name: NonNullable<unknown>;
    position: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} added at position {position}." |
*
* @param {Kits_Announce_AddedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_announce_added: ((inputs: Kits_Announce_AddedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_AddedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
