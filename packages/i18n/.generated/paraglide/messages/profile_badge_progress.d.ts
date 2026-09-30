export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badge_ProgressInputs = {
    current: NonNullable<unknown>;
    target: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{current} / {target}" |
*
* @param {Profile_Badge_ProgressInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badge_progress: ((inputs: Profile_Badge_ProgressInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_ProgressInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
