export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sanction_Revoked_OnInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Revoked on {date}" |
*
* @param {Ranger_Sanction_Revoked_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sanction_revoked_on: ((inputs: Ranger_Sanction_Revoked_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Revoked_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
