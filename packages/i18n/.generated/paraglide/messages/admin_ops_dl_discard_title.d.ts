export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_Discard_TitleInputs = {
    queue: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Discard the failed jobs of {queue}?" |
*
* @param {Admin_Ops_Dl_Discard_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_discard_title: ((inputs: Admin_Ops_Dl_Discard_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
