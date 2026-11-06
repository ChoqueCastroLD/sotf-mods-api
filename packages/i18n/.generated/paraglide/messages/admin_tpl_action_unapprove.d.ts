export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tpl_Action_UnapproveInputs = {};
/**
* | output |
* | --- |
* | "Unapprove" |
*
* @param {Admin_Tpl_Action_UnapproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tpl_action_unapprove: ((inputs?: Admin_Tpl_Action_UnapproveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_UnapproveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
