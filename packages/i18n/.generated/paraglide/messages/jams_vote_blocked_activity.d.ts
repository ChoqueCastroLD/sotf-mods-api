export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Vote_Blocked_ActivityInputs = {};
/**
* | output |
* | --- |
* | "Take part in the community a little more to unlock voting." |
*
* @param {Jams_Vote_Blocked_ActivityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_vote_blocked_activity: ((inputs?: Jams_Vote_Blocked_ActivityInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_ActivityInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
