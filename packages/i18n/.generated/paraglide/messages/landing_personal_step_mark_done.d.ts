export type LocalizedString = import('../runtime.js').LocalizedString;
export type Landing_Personal_Step_Mark_DoneInputs = {
    step: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mark “{step}” as done" |
*
* @param {Landing_Personal_Step_Mark_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const landing_personal_step_mark_done: ((inputs: Landing_Personal_Step_Mark_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Mark_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
