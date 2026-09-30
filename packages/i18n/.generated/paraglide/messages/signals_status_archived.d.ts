export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Status_ArchivedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Your mod {mod} was archived" |
*
* @param {Signals_Status_ArchivedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_status_archived: ((inputs: Signals_Status_ArchivedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Status_ArchivedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
