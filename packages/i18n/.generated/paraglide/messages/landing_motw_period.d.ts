export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Motw_PeriodInputs = {
    start: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Week of {start}" |
*
* @param {Landing_Motw_PeriodInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_motw_period: ((inputs: Landing_Motw_PeriodInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Motw_PeriodInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
