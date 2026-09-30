export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Issue_Invalid_Number_Of_ElementsInputs = {};
/**
* | output |
* | --- |
* | "NumberOfElements must be a whole number." |
*
* @param {Upload_Issue_Invalid_Number_Of_ElementsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_issue_invalid_number_of_elements: ((inputs?: Upload_Issue_Invalid_Number_Of_ElementsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Issue_Invalid_Number_Of_ElementsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
