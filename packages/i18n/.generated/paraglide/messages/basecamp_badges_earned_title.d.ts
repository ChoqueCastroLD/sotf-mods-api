export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Earned_TitleInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Earned ({count})" |
*
* @param {Basecamp_Badges_Earned_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_earned_title: ((inputs: Basecamp_Badges_Earned_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Earned_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
