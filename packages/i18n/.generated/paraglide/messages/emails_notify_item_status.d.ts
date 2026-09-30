export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_StatusInputs = {
    status: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "published" | "{mod} was approved and is live" |
* | "rejected" | "{mod} was not approved" |
* | "pending" | "{mod} needs changes before it can be approved" |
* | "archived" | "{mod} was archived" |
* | "unlisted" | "{mod} was unlisted" |
* | "removed" | "{mod} was removed from SOTF Mods" |
* | * | "The status of {mod} changed" |
*
* @param {Emails_Notify_Item_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_status: ((inputs: Emails_Notify_Item_StatusInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_StatusInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
