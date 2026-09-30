export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Compat_PromptInputs = {
    build: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game build {build} is out: tell us if the mods you downloaded still work" |
*
* @param {Emails_Notify_Item_Compat_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_compat_prompt: ((inputs: Emails_Notify_Item_Compat_PromptInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_PromptInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
