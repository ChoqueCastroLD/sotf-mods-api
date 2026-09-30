export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Phase_Submissions_ClosedInputs = {};
/**
* | output |
* | --- |
* | "Submissions closed" |
*
* @param {Jams_Phase_Submissions_ClosedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_phase_submissions_closed: ((inputs?: Jams_Phase_Submissions_ClosedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_Submissions_ClosedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
