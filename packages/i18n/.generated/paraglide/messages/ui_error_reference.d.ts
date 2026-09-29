export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ui_Error_ReferenceInputs = {
    id: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Ref: {id}" |
*
* @param {Ui_Error_ReferenceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ui_error_reference: ((inputs: Ui_Error_ReferenceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Error_ReferenceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
