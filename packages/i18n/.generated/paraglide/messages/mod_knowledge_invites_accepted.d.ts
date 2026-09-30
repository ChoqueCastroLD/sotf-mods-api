export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Invites_AcceptedInputs = {
    mod: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You are now a co-author of {mod}" |
*
* @param {Mod_Knowledge_Invites_AcceptedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_invites_accepted: ((inputs: Mod_Knowledge_Invites_AcceptedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Invites_AcceptedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
