export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Saved_PendingInputs = {};
/**
* | output |
* | --- |
* | "Modpack saved. A moderator will review it before it is published." |
*
* @param {Modpacks_Saved_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_saved_pending: ((inputs?: Modpacks_Saved_PendingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Saved_PendingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
