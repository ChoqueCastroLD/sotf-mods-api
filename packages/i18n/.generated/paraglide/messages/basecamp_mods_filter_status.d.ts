export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Mods_Filter_StatusInputs = {
    status: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{status} ({count})" |
*
* @param {Basecamp_Mods_Filter_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_mods_filter_status: ((inputs: Basecamp_Mods_Filter_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Filter_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
