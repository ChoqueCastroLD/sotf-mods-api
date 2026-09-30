export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Comment_Bug_Fixed_InInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Fixed in v{version}" |
*
* @param {Ui_Domain_Comment_Bug_Fixed_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_comment_bug_fixed_in: ((inputs: Ui_Domain_Comment_Bug_Fixed_InInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Bug_Fixed_InInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
