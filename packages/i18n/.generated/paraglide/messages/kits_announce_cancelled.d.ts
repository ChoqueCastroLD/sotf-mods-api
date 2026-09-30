export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Announce_CancelledInputs = {
    name: NonNullable<unknown>;
    position: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Move cancelled. {name} is back at position {position}." |
*
* @param {Kits_Announce_CancelledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_announce_cancelled: ((inputs: Kits_Announce_CancelledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_CancelledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
