export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Vote_Blocked_PhaseInputs = {};
/**
* | output |
* | --- |
* | "Voting is not open right now." |
*
* @param {Jams_Vote_Blocked_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_vote_blocked_phase: ((inputs?: Jams_Vote_Blocked_PhaseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_PhaseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
