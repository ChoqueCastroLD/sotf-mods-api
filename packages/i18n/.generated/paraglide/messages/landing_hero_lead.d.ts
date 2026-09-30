export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Hero_LeadInputs = {
    modCount: NonNullable<unknown>;
    buildCount: NonNullable<unknown>;
};
/**
* | modCount__plural | buildCount__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{modCount__number} Sons of the Forest mod, {buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no ..." |
* | "one" | * | "{modCount__number} Sons of the Forest mod, {buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, no..." |
* | * | "one" | "{modCount__number} Sons of the Forest mods, {buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no..." |
* | * | * | "{modCount__number} Sons of the Forest mods, {buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, n..." |
*
* @param {Landing_Hero_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_hero_lead: ((inputs: Landing_Hero_LeadInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_LeadInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
