export type LocalizedString = import('../runtime.js').LocalizedString;
export type Common_Badge_UnlockedInputs = {
    badge: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Badge unlocked: {badge}" |
*
* @param {Common_Badge_UnlockedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const common_badge_unlocked: ((inputs: Common_Badge_UnlockedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Badge_UnlockedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
