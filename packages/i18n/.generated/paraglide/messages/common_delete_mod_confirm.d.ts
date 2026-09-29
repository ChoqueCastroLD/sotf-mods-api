export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Delete_Mod_ConfirmInputs = {};
/**
* | output |
* | --- |
* | "Type the mod name to delete it forever. Download history is kept for stats." |
*
* @param {Common_Delete_Mod_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_delete_mod_confirm: ((inputs?: Common_Delete_Mod_ConfirmInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Delete_Mod_ConfirmInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
