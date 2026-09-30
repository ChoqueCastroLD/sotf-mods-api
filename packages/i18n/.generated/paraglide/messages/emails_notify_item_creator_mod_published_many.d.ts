export type LocalizedString = import('../runtime.js').LocalizedString;
export type Emails_Notify_Item_Creator_Mod_Published_ManyInputs = {
    count: NonNullable<unknown>;
    actor: NonNullable<unknown>;
    mod: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{actor} published {count__number} new mod, the latest is {mod}" |
* | * | "{actor} published {count__number} new mods, the latest is {mod}" |
*
* @param {Emails_Notify_Item_Creator_Mod_Published_ManyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const emails_notify_item_creator_mod_published_many: ((inputs: Emails_Notify_Item_Creator_Mod_Published_ManyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Item_Creator_Mod_Published_ManyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
