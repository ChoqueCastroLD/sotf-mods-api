export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_Yanked_ReasonInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Yanked: {reason}" |
*
* @param {Basecamp_Versions_Yanked_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_yanked_reason: ((inputs: Basecamp_Versions_Yanked_ReasonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yanked_ReasonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
