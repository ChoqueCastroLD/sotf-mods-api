export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Results_SummaryInputs = {
    participants: NonNullable<unknown>;
    voters: NonNullable<unknown>;
};
/**
* | participants__plural | voters__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{participants__number} participant · {voters__number} voter" |
* | "one" | * | "{participants__number} participant · {voters__number} voters" |
* | * | "one" | "{participants__number} participants · {voters__number} voter" |
* | * | * | "{participants__number} participants · {voters__number} voters" |
*
* @param {Jams_Results_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_results_summary: ((inputs: Jams_Results_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
