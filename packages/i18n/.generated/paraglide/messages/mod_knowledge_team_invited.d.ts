export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Team_InvitedInputs = {
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Invitation sent to @{handle}" |
*
* @param {Mod_Knowledge_Team_InvitedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_team_invited: ((inputs: Mod_Knowledge_Team_InvitedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Team_InvitedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
