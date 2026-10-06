export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Description_UserInputs = {
    name: NonNullable<unknown>;
    reviews: NonNullable<unknown>;
};
/**
* | reviews__plural | output |
* | --- | --- |
* | "one" | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} review." |
* | * | "{name} on SOTF Mods, the Sons of the Forest modding community: {reviews__number} reviews." |
*
* @param {Profile_Meta_Description_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_description_user: ((inputs: Profile_Meta_Description_UserInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Description_UserInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
