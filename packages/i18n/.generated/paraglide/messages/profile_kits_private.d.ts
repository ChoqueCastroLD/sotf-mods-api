export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Kits_PrivateInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} keeps their kits private." |
*
* @param {Profile_Kits_PrivateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_kits_private: ((inputs: Profile_Kits_PrivateInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_PrivateInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
