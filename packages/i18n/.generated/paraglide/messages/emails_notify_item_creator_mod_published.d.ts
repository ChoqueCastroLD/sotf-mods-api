export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Creator_Mod_PublishedInputs = {
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} published {mod}" |
*
* @param {Emails_Notify_Item_Creator_Mod_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_creator_mod_published: ((inputs: Emails_Notify_Item_Creator_Mod_PublishedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Creator_Mod_PublishedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
