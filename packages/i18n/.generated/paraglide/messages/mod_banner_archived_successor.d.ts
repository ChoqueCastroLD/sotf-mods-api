export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Banner_Archived_SuccessorInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "The creator no longer maintains this mod and points to {name} instead." |
*
* @param {Mod_Banner_Archived_SuccessorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_banner_archived_successor: ((inputs: Mod_Banner_Archived_SuccessorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Banner_Archived_SuccessorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
