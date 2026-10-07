export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Action_Close_SubmissionsInputs = {};
/**
* | output |
* | --- |
* | "Close submissions now" |
*
* @param {Jams_Editor_Action_Close_SubmissionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_action_close_submissions: ((inputs?: Jams_Editor_Action_Close_SubmissionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_Close_SubmissionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
