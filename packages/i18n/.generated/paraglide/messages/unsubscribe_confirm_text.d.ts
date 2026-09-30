export type LocalizedString = import('../runtime.js').LocalizedString;
export type Unsubscribe_Confirm_TextInputs = {};
/**
* | output |
* | --- |
* | "Stop these emails? You can turn them back on in Settings." |
*
* @param {Unsubscribe_Confirm_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const unsubscribe_confirm_text: ((inputs?: Unsubscribe_Confirm_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Unsubscribe_Confirm_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
