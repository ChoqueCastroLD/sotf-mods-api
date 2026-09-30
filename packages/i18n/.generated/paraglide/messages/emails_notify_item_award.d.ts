export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_AwardInputs = {
    kind: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | kind | output |
* | --- | --- |
* | "mod_of_week" | "{mod} is Mod of the Week" |
* | "mod_of_month" | "{mod} is Mod of the Month" |
* | "build_of_month" | "{mod} is Build of the Month" |
* | * | "{mod} is a Staff Pick" |
*
* @param {Emails_Notify_Item_AwardInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_award: ((inputs: Emails_Notify_Item_AwardInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_AwardInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
