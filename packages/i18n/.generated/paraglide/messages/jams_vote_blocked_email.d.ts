export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Vote_Blocked_EmailInputs = {};
/**
* | output |
* | --- |
* | "Verify your email address to vote." |
*
* @param {Jams_Vote_Blocked_EmailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_vote_blocked_email: ((inputs?: Jams_Vote_Blocked_EmailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Vote_Blocked_EmailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
