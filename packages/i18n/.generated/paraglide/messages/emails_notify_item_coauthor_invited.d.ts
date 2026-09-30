export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Coauthor_InvitedInputs = {
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} invited you to co-author {mod}" |
*
* @param {Emails_Notify_Item_Coauthor_InvitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_coauthor_invited: ((inputs: Emails_Notify_Item_Coauthor_InvitedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Coauthor_InvitedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
