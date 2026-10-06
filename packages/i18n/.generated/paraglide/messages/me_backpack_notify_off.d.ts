export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Backpack_Notify_OffInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "No more update notifications for {mod}" |
*
* @param {Me_Backpack_Notify_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_backpack_notify_off: ((inputs: Me_Backpack_Notify_OffInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Notify_OffInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
