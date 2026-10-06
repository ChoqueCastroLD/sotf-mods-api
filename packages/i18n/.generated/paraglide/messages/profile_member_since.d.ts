export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Member_SinceInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Member since {date}" |
*
* @param {Profile_Member_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_member_since: ((inputs: Profile_Member_SinceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Member_SinceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
