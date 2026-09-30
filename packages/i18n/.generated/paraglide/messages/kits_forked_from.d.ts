export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Forked_FromInputs = {
    kit: NonNullable<unknown>;
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Forked from {kit} by @{handle}" |
*
* @param {Kits_Forked_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_forked_from: ((inputs: Kits_Forked_FromInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Forked_FromInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
