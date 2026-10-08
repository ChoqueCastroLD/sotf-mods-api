export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dead_Letter_TextInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Failed jobs waiting: {count}. They ran out of retries and nothing will run them again. Review them below, then retry or discard them." |
*
* @param {Admin_Ops_Dead_Letter_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dead_letter_text: ((inputs: Admin_Ops_Dead_Letter_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dead_Letter_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
