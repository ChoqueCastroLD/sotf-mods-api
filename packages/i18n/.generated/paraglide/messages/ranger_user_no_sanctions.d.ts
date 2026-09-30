export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_No_SanctionsInputs = {};
/**
* | output |
* | --- |
* | "No sanctions, ever." |
*
* @param {Ranger_User_No_SanctionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_no_sanctions: ((inputs?: Ranger_User_No_SanctionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_No_SanctionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
