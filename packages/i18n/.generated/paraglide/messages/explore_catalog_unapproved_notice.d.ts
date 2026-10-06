export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_Unapproved_NoticeInputs = {};
/**
* | output |
* | --- |
* | "These mods passed the automated checks and are waiting for a moderator to approve them. They are not part of the main list." |
*
* @param {Explore_Catalog_Unapproved_NoticeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_unapproved_notice: ((inputs?: Explore_Catalog_Unapproved_NoticeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Unapproved_NoticeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
