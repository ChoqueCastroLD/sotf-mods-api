export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Stats_Last30Inputs = {
    display: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Last 30 days: {display}" |
*
* @param {Mod_Stats_Last30Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_stats_last30: ((inputs: Mod_Stats_Last30Inputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Stats_Last30Inputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
