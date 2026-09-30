export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Domain_Review_Reply_FromInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Reply from {name}" |
*
* @param {Ui_Domain_Review_Reply_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_domain_review_reply_from: ((inputs: Ui_Domain_Review_Reply_FromInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Review_Reply_FromInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
