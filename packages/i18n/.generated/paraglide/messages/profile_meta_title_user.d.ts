export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Title_UserInputs = {
    name: NonNullable<unknown>;
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} (@{handle})" |
*
* @param {Profile_Meta_Title_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_title_user: ((inputs: Profile_Meta_Title_UserInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_UserInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
