export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Stat_Delta_FlatInputs = {
    days: NonNullable<unknown>;
};
/**
* | days__plural | output |
* | --- | --- |
* | "one" | "No change in {days__number} day" |
* | * | "No change in {days__number} days" |
*
* @param {Ui_Domain_Stat_Delta_FlatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_stat_delta_flat: ((inputs: Ui_Domain_Stat_Delta_FlatInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_Delta_FlatInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
