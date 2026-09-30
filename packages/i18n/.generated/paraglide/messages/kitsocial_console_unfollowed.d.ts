export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kitsocial_Console_UnfollowedInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You unfollowed {name}." |
*
* @param {Kitsocial_Console_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kitsocial_console_unfollowed: ((inputs: Kitsocial_Console_UnfollowedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_UnfollowedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
