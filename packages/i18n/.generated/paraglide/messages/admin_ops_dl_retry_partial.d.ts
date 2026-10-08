export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Dl_Retry_PartialInputs = {
    queue: NonNullable<unknown>;
    count: NonNullable<unknown>;
    failed: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Jobs sent back to {queue}: {count}. Jobs that could not be sent and are still listed: {failed}." |
*
* @param {Admin_Ops_Dl_Retry_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_dl_retry_partial: ((inputs: Admin_Ops_Dl_Retry_PartialInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_PartialInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
