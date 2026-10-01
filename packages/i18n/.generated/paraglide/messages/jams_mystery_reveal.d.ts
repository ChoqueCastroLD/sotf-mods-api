export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Mystery_RevealInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Revealed {date}" |
*
* @param {Jams_Mystery_RevealInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_mystery_reveal: ((inputs: Jams_Mystery_RevealInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mystery_RevealInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
