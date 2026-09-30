export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Countdown_Voting_CloseInputs = {};
/**
* | output |
* | --- |
* | "Voting closes in" |
*
* @param {Jams_Countdown_Voting_CloseInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_countdown_voting_close: ((inputs?: Jams_Countdown_Voting_CloseInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Countdown_Voting_CloseInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
