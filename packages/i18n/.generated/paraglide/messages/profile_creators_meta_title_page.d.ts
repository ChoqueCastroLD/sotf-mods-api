export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Creators_Meta_Title_PageInputs = {
    page: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Sons of the Forest mod creators — page {page}" |
*
* @param {Profile_Creators_Meta_Title_PageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_creators_meta_title_page: ((inputs: Profile_Creators_Meta_Title_PageInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Meta_Title_PageInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
