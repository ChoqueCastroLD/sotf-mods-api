export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Mods_More_ActionsInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "More actions for {name}" |
*
* @param {Basecamp_Mods_More_ActionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_mods_more_actions: ((inputs: Basecamp_Mods_More_ActionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_More_ActionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
