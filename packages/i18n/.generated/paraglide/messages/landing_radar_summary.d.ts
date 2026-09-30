export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Radar_SummaryInputs = {
    build: NonNullable<unknown>;
    share: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game {build} · {share} of the top 50 mods confirmed on this patch" |
*
* @param {Landing_Radar_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_radar_summary: ((inputs: Landing_Radar_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Radar_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
