export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Review_UnapprovedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} moved back to pending" |
*
* @param {Modpacks_Review_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_review_unapproved: ((inputs: Modpacks_Review_UnapprovedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_UnapprovedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
