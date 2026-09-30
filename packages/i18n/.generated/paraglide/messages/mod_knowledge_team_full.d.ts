export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Team_FullInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "A mod can have up to {max} co-authors, including pending invitations." |
*
* @param {Mod_Knowledge_Team_FullInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_team_full: ((inputs: Mod_Knowledge_Team_FullInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_FullInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
