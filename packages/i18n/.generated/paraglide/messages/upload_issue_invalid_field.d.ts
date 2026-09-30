export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Issue_Invalid_FieldInputs = {
    field: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The field “{field}” is missing or invalid." |
*
* @param {Upload_Issue_Invalid_FieldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_issue_invalid_field: ((inputs: Upload_Issue_Invalid_FieldInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_FieldInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
