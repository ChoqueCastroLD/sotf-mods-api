export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Console_SinceInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Following since {date}" |
*
* @param {Kitsocial_Console_SinceInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_console_since: ((inputs: Kitsocial_Console_SinceInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_SinceInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
