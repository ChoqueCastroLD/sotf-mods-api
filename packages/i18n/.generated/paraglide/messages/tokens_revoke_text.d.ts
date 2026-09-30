export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Revoke_TextInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Anything using “{name}” will stop working immediately." |
*
* @param {Tokens_Revoke_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_revoke_text: ((inputs: Tokens_Revoke_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Revoke_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
