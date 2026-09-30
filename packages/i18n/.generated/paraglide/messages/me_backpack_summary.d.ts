export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Backpack_SummaryInputs = {
    count: NonNullable<unknown>;
    updates: NonNullable<unknown>;
};
/**
* | count__plural | updates__exact | updates__plural | output |
* | --- | --- | --- | --- |
* | "one" | "0" | * | "{count__number} mod in your backpack · everything up to date" |
* | "one" | * | "one" | "{count__number} mod in your backpack · {updates__number} update available" |
* | "one" | * | * | "{count__number} mod in your backpack · {updates__number} updates available" |
* | * | "0" | * | "{count__number} mods in your backpack · everything up to date" |
* | * | * | "one" | "{count__number} mods in your backpack · {updates__number} update available" |
* | * | * | * | "{count__number} mods in your backpack · {updates__number} updates available" |
*
* @param {Me_Backpack_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_backpack_summary: ((inputs: Me_Backpack_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
