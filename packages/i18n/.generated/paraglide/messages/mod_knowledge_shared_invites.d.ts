export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Knowledge_Shared_InvitesInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Invitations ({count})" |
*
* @param {Mod_Knowledge_Shared_InvitesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_knowledge_shared_invites: ((inputs: Mod_Knowledge_Shared_InvitesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Shared_InvitesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
