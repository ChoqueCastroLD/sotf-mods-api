export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Drafts_Delete_NamedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Delete {name}" |
*
* @param {Upload_Drafts_Delete_NamedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_drafts_delete_named: ((inputs: Upload_Drafts_Delete_NamedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Delete_NamedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
