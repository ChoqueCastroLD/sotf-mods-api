export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_Discard_TextInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Jobs removed from this list: {count}. They will not run again. This cannot be undone." |
*
* @param {Admin_Ops_Dl_Discard_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_discard_text: ((inputs: Admin_Ops_Dl_Discard_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
