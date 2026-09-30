export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Kits_Empty_DescriptionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} hasn’t shared a kit yet. Kits are curated mod loadouts anyone can install in one go." |
*
* @param {Profile_Kits_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_kits_empty_description: ((inputs: Profile_Kits_Empty_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_Empty_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
