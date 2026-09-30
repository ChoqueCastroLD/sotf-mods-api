export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Announce_RestoredInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} restored." |
*
* @param {Kits_Announce_RestoredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_announce_restored: ((inputs: Kits_Announce_RestoredInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Announce_RestoredInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
