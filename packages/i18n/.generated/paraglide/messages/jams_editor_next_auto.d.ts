export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Next_AutoInputs = {
    phase: NonNullable<unknown>;
    date: NonNullable<unknown>;
    relative: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Next on the schedule: {phase} on {date} ({relative})." |
*
* @param {Jams_Editor_Next_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_next_auto: ((inputs: Jams_Editor_Next_AutoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Next_AutoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
