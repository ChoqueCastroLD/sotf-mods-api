export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_AnnouncementInputs = {};
/**
* | output |
* | --- |
* | "There’s a new announcement from SOTF Mods" |
*
* @param {Emails_Notify_Item_AnnouncementInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_announcement: ((inputs?: Emails_Notify_Item_AnnouncementInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_AnnouncementInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
