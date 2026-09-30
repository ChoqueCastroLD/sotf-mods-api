export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Kit_Added_My_ModInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{mod} was added to a public kit" |
*
* @param {Emails_Notify_Item_Kit_Added_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_kit_added_my_mod: ((inputs: Emails_Notify_Item_Kit_Added_My_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Kit_Added_My_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
