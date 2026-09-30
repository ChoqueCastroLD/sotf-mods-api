export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Cards_Empty_DescriptionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} hasn’t published anything here yet. Explore what the rest of the island made." |
*
* @param {Profile_Cards_Empty_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_cards_empty_description: ((inputs: Profile_Cards_Empty_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Cards_Empty_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
