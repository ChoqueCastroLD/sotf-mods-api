export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Profile_ByInputs = {
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "by @{handle}" |
*
* @param {Mod_Knowledge_Profile_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_profile_by: ((inputs: Mod_Knowledge_Profile_ByInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Profile_ByInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
