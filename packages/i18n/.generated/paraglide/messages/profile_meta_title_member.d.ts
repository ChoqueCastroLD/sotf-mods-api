export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Title_MemberInputs = {
    name: NonNullable<unknown>;
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} (@{handle}) — Sons of the Forest modding community" |
*
* @param {Profile_Meta_Title_MemberInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_title_member: ((inputs: Profile_Meta_Title_MemberInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_MemberInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
