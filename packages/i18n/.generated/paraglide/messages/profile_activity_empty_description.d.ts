export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Activity_Empty_DescriptionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} hasn’t released, commented, reviewed or reported anything in the last 12 months." |
*
* @param {Profile_Activity_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_activity_empty_description: ((inputs: Profile_Activity_Empty_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Empty_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
