export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entry_FallbackInputs = {
    id: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Entry #{id}" |
*
* @param {Jams_Entry_FallbackInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entry_fallback: ((inputs: Jams_Entry_FallbackInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_FallbackInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
