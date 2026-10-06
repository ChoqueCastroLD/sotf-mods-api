export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Backpack_Notify_OnInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You’ll be notified when {mod} updates" |
*
* @param {Me_Backpack_Notify_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_backpack_notify_on: ((inputs: Me_Backpack_Notify_OnInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_Notify_OnInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
