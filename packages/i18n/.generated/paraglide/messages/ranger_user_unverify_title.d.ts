export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Unverify_TitleInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Remove the trusted status from {name}?" |
*
* @param {Ranger_User_Unverify_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_unverify_title: ((inputs: Ranger_User_Unverify_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Unverify_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
