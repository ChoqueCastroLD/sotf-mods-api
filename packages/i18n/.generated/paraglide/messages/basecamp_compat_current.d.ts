export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Compat_CurrentInputs = {
    build: NonNullable<unknown>;
    works: NonNullable<unknown>;
    partial: NonNullable<unknown>;
    broken: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Game build {build}: {works} works, {partial} partial, {broken} broken" |
*
* @param {Basecamp_Compat_CurrentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_compat_current: ((inputs: Basecamp_Compat_CurrentInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_CurrentInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
