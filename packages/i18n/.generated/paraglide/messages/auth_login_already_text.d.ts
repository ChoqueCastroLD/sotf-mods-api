export type LocalizedString = import('../runtime.js').LocalizedString;
export type Auth_Login_Already_TextInputs = {
    name: NonNullable<unknown>;
    handle: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Logged in as {name} (@{handle})." |
*
* @param {Auth_Login_Already_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const auth_login_already_text: ((inputs: Auth_Login_Already_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Login_Already_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
