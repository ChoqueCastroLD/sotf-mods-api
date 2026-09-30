export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Stat_Delta_DownInputs = {
    percent: NonNullable<unknown>;
    days: NonNullable<unknown>;
};
/**
* | days__plural | output |
* | --- | --- |
* | "one" | "Down {percent} in {days__number} day" |
* | * | "Down {percent} in {days__number} days" |
*
* @param {Ui_Domain_Stat_Delta_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_stat_delta_down: ((inputs: Ui_Domain_Stat_Delta_DownInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Stat_Delta_DownInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
