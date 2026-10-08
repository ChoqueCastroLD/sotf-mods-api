export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_Discard_All_TextInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Jobs removed from this list: {count}, from every queue. They will not run again. This cannot be undone." |
*
* @param {Admin_Ops_Dl_Discard_All_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_discard_all_text: ((inputs: Admin_Ops_Dl_Discard_All_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_All_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
