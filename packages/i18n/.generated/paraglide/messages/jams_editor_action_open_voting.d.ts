export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Action_Open_VotingInputs = {};
/**
* | output |
* | --- |
* | "Open voting now" |
*
* @param {Jams_Editor_Action_Open_VotingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_action_open_voting: ((inputs?: Jams_Editor_Action_Open_VotingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_Open_VotingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
