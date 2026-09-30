export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Role_DoneInputs = {
    name: NonNullable<unknown>;
    role: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} is now {role}." |
*
* @param {Ranger_User_Role_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_role_done: ((inputs: Ranger_User_Role_DoneInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Role_DoneInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
