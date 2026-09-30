export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_ForcedInputs = {
    phase: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Jam moved to \"{phase}\"." |
*
* @param {Jams_Editor_ForcedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_forced: ((inputs: Jams_Editor_ForcedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_ForcedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
