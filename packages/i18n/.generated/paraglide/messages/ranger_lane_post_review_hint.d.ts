export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Lane_Post_Review_HintInputs = {};
/**
* | output |
* | --- |
* | "Versions already published without a human look: review them within 72 hours." |
*
* @param {Ranger_Lane_Post_Review_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_lane_post_review_hint: ((inputs?: Ranger_Lane_Post_Review_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Lane_Post_Review_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
