export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Compat_BrokenInputs = {
    status: NonNullable<unknown>;
    mod: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "broken" | "Players report that {mod} is broken on game build {build}" |
* | * | "Players report mixed results for {mod} on game build {build}" |
*
* @param {Emails_Notify_Item_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_compat_broken: ((inputs: Emails_Notify_Item_Compat_BrokenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Compat_BrokenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
