export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Badges_ProgressInputs = {
    current: NonNullable<unknown>;
    target: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{current} of {target}" |
*
* @param {Basecamp_Badges_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_badges_progress: ((inputs: Basecamp_Badges_ProgressInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Badges_ProgressInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
