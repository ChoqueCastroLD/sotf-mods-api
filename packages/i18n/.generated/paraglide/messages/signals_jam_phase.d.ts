export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Jam_PhaseInputs = {
    phase: NonNullable<unknown>;
    jam: NonNullable<unknown>;
};
/**
* | phase | output |
* | --- | --- |
* | "announced" | "Mod Jam announced: {jam}" |
* | "submissions" | "Submissions are open in {jam}" |
* | "voting" | "Voting is open in {jam}" |
* | "results" | "Results are out for {jam}" |
* | * | "{jam} has an update" |
*
* @param {Signals_Jam_PhaseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_jam_phase: ((inputs: Signals_Jam_PhaseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Jam_PhaseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
