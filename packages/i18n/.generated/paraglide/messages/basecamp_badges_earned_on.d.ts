export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_Earned_OnInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Earned on {date}" |
*
* @param {Basecamp_Badges_Earned_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_earned_on: ((inputs: Basecamp_Badges_Earned_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_Earned_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
