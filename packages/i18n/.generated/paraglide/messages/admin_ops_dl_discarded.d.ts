export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_DiscardedInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Failed jobs discarded: {count}." |
*
* @param {Admin_Ops_Dl_DiscardedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_discarded: ((inputs: Admin_Ops_Dl_DiscardedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DiscardedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
