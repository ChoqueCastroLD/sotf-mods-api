export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Limit_ReachedInputs = {
    max: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You reached the limit of {max} active tokens. Revoke one to create another." |
*
* @param {Tokens_Limit_ReachedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_limit_reached: ((inputs: Tokens_Limit_ReachedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Limit_ReachedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
