export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Submit_Notes_HintInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Up to {max} characters. Tell people how it fits the theme." |
*
* @param {Jams_Submit_Notes_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_submit_notes_hint: ((inputs: Jams_Submit_Notes_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_Notes_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
