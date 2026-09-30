export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Decided_UnlistInputs = {
    title: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Unlisted: {title}" |
*
* @param {Ranger_Decided_UnlistInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_decided_unlist: ((inputs: Ranger_Decided_UnlistInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_UnlistInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
