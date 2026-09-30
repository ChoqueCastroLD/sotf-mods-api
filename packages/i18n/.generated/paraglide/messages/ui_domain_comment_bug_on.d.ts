export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Comment_Bug_OnInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Bug report · v{version}" |
*
* @param {Ui_Domain_Comment_Bug_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_comment_bug_on: ((inputs: Ui_Domain_Comment_Bug_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_Bug_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
