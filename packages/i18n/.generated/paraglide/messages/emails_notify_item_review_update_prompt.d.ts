export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Review_Update_PromptInputs = {
    mod: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} released a new major version ({version}): update your review" |
*
* @param {Emails_Notify_Item_Review_Update_PromptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_review_update_prompt: ((inputs: Emails_Notify_Item_Review_Update_PromptInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_Update_PromptInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
