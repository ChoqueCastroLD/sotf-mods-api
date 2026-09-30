export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Description_MemberInputs = {
    name: NonNullable<unknown>;
    reviews: NonNullable<unknown>;
    reports: NonNullable<unknown>;
};
/**
* | reviews__plural | reports__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review and {reports__number} field report." |
* | "one" | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review and {reports__number} field reports." |
* | * | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews and {reports__number} field report." |
* | * | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews and {reports__number} field reports." |
*
* @param {Profile_Meta_Description_MemberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_description_member: ((inputs: Profile_Meta_Description_MemberInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_MemberInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
