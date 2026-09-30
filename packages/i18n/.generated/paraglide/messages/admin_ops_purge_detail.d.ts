export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Ops_Purge_DetailInputs = {
    queued: NonNullable<unknown>;
    failed: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "CDN purges waiting: {queued} · failed in the last 24 h: {failed}" |
*
* @param {Admin_Ops_Purge_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_ops_purge_detail: ((inputs: Admin_Ops_Purge_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Purge_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
