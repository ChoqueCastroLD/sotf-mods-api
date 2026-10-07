export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Results_Not_ReadyInputs = {
    phase: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Results can be computed once the jam reaches the {phase} phase." |
*
* @param {Jams_Results_Not_ReadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_results_not_ready: ((inputs: Jams_Results_Not_ReadyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Not_ReadyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
