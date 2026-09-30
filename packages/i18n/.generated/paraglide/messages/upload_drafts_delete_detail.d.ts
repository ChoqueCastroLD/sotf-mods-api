export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Drafts_Delete_DetailInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "“{name}” and its unsent files will be gone. This can’t be undone." |
*
* @param {Upload_Drafts_Delete_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_drafts_delete_detail: ((inputs: Upload_Drafts_Delete_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Drafts_Delete_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
