export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Checks_No_FlagsInputs = {};
/**
* | output |
* | --- |
* | "No check raised a flag." |
*
* @param {Ranger_Checks_No_FlagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_checks_no_flags: ((inputs?: Ranger_Checks_No_FlagsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_No_FlagsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
