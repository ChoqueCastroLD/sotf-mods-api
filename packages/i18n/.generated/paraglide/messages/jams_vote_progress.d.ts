export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Vote_ProgressInputs = {
    done: NonNullable<unknown>;
    total: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{done} of {total} voted" |
*
* @param {Jams_Vote_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_vote_progress: ((inputs: Jams_Vote_ProgressInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_ProgressInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
