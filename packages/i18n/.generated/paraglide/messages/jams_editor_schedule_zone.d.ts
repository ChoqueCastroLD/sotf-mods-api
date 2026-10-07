export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Schedule_ZoneInputs = {
    zone: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your time zone is {zone}." |
*
* @param {Jams_Editor_Schedule_ZoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_schedule_zone: ((inputs: Jams_Editor_Schedule_ZoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Schedule_ZoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
