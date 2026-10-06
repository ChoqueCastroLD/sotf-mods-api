export type LocalizedString = import('../runtime.js').LocalizedString;
export type Explore_Catalog_Pending_ApprovalInputs = {};
/**
* | output |
* | --- |
* | "Pending approval" |
*
* @param {Explore_Catalog_Pending_ApprovalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const explore_catalog_pending_approval: ((inputs?: Explore_Catalog_Pending_ApprovalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Pending_ApprovalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
