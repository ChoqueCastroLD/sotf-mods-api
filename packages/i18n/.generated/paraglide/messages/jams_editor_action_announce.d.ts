export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Action_AnnounceInputs = {};
/**
* | output |
* | --- |
* | "Announce jam" |
*
* @param {Jams_Editor_Action_AnnounceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_action_announce: ((inputs?: Jams_Editor_Action_AnnounceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Action_AnnounceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
