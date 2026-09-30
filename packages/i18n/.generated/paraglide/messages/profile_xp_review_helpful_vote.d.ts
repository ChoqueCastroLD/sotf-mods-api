export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Review_Helpful_VoteInputs = {};
/**
* | output |
* | --- |
* | "A “helpful” vote on your review" |
*
* @param {Profile_Xp_Review_Helpful_VoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_review_helpful_vote: ((inputs?: Profile_Xp_Review_Helpful_VoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Review_Helpful_VoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
