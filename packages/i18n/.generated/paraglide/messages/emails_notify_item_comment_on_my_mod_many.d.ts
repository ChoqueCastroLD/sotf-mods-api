export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Comment_On_My_Mod_ManyInputs = {
    count: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} new comment on {mod}" |
* | * | "{count__number} new comments on {mod}" |
*
* @param {Emails_Notify_Item_Comment_On_My_Mod_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_comment_on_my_mod_many: ((inputs: Emails_Notify_Item_Comment_On_My_Mod_ManyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Comment_On_My_Mod_ManyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
