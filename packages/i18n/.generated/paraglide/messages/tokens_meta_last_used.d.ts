export type LocalizedString = import('../runtime.js').LocalizedString;
export type Tokens_Meta_Last_UsedInputs = {
    when: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Last used {when}" |
*
* @param {Tokens_Meta_Last_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const tokens_meta_last_used: ((inputs: Tokens_Meta_Last_UsedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_Last_UsedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
