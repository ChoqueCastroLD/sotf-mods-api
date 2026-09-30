export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Stat_This_Week_ValueInputs = {
    display: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{display} this week" |
*
* @param {Mod_Stat_This_Week_ValueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_stat_this_week_value: ((inputs: Mod_Stat_This_Week_ValueInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stat_This_Week_ValueInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
