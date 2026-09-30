export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_Helping_Hand_HintInputs = {};
/**
* | output |
* | --- |
* | "Have 5 comments marked as the solution or pinned by a creator." |
*
* @param {Profile_Badge_Helping_Hand_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_helping_hand_hint: ((inputs?: Profile_Badge_Helping_Hand_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Helping_Hand_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
