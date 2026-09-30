export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Version_Yanked_ReasonInputs = {
    reason: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Withdrawn by the creator: {reason}" |
*
* @param {Mod_Version_Yanked_ReasonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_version_yanked_reason: ((inputs: Mod_Version_Yanked_ReasonInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Yanked_ReasonInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
