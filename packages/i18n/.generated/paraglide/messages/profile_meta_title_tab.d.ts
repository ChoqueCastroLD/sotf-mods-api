export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Meta_Title_TabInputs = {
    tab: NonNullable<unknown>;
    name: NonNullable<unknown>;
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{tab} · {name} (@{handle})" |
*
* @param {Profile_Meta_Title_TabInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_meta_title_tab: ((inputs: Profile_Meta_Title_TabInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Meta_Title_TabInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
