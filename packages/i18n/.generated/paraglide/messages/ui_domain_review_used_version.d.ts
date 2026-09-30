export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Review_Used_VersionInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Used v{version}" |
*
* @param {Ui_Domain_Review_Used_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_review_used_version: ((inputs: Ui_Domain_Review_Used_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_Used_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
