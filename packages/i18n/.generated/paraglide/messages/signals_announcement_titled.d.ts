export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Announcement_TitledInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Announcement: {title}" |
*
* @param {Signals_Announcement_TitledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_announcement_titled: ((inputs: Signals_Announcement_TitledInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Announcement_TitledInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
