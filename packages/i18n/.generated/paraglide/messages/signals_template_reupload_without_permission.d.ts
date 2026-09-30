export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Template_Reupload_Without_PermissionInputs = {};
/**
* | output |
* | --- |
* | "This looks like a reupload of someone else’s work without their permission." |
*
* @param {Signals_Template_Reupload_Without_PermissionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_template_reupload_without_permission: ((inputs?: Signals_Template_Reupload_Without_PermissionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Template_Reupload_Without_PermissionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
