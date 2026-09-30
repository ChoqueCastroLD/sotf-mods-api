export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Suspended_UntilInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Suspended until {date}" |
*
* @param {Ranger_User_Suspended_UntilInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_suspended_until: ((inputs: Ranger_User_Suspended_UntilInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Suspended_UntilInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
