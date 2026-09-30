export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Review_ForbiddenInputs = {};
/**
* | output |
* | --- |
* | "You can’t review this mod yet: reviews need a verified e-mail and an account at least 24 hours old, and creators can’t review their own mods." |
*
* @param {Social_Review_ForbiddenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_review_forbidden: ((inputs?: Social_Review_ForbiddenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_ForbiddenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
