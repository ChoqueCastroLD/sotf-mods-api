export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Review_On_My_ModInputs = {
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
    rating: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{actor} reviewed {mod}: {rating}/5" |
*
* @param {Emails_Notify_Item_Review_On_My_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_review_on_my_mod: ((inputs: Emails_Notify_Item_Review_On_My_ModInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Review_On_My_ModInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
