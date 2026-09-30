export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Patch_BreakingInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game build {build} may break mods: check yours on Patch Radar" |
*
* @param {Emails_Notify_Item_Patch_BreakingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_patch_breaking: ((inputs: Emails_Notify_Item_Patch_BreakingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Patch_BreakingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
