export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Apply_Tags_HintInputs = {};
/**
* | output |
* | --- |
* | "Tags are added to the ones each mod already has (5 at most). Mods that aren’t public keep their tags." |
*
* @param {Admin_Recat_Apply_Tags_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_apply_tags_hint: ((inputs?: Admin_Recat_Apply_Tags_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Apply_Tags_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
