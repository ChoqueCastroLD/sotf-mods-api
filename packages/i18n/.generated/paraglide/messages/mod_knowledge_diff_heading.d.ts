export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Diff_HeadingInputs = {
    from: NonNullable<unknown>;
    to: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Changes from {from} to {to}" |
*
* @param {Mod_Knowledge_Diff_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_diff_heading: ((inputs: Mod_Knowledge_Diff_HeadingInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Diff_HeadingInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
