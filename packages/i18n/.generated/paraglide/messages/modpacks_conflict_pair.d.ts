export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Conflict_PairInputs = {
    a: NonNullable<unknown>;
    b: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{a} is not compatible with {b}" |
*
* @param {Modpacks_Conflict_PairInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_conflict_pair: ((inputs: Modpacks_Conflict_PairInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Conflict_PairInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
