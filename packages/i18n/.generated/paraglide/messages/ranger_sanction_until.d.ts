export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sanction_UntilInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "until {date}" |
*
* @param {Ranger_Sanction_UntilInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sanction_until: ((inputs: Ranger_Sanction_UntilInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_UntilInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
