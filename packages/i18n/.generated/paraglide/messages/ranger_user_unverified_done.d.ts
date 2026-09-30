export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Unverified_DoneInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is no longer a verified creator." |
*
* @param {Ranger_User_Unverified_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_unverified_done: ((inputs: Ranger_User_Unverified_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Unverified_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
