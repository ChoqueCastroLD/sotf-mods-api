export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tpl_Action_ApproveInputs = {};
/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Admin_Tpl_Action_ApproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tpl_action_approve: ((inputs?: Admin_Tpl_Action_ApproveInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_ApproveInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
