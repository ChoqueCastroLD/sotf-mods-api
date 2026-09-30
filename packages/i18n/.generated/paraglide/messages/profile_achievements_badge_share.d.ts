export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Achievements_Badge_ShareInputs = {
    share: NonNullable<unknown>;
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{share} of survivors · {count__number} holder" |
* | * | "{share} of survivors · {count__number} holders" |
*
* @param {Profile_Achievements_Badge_ShareInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_achievements_badge_share: ((inputs: Profile_Achievements_Badge_ShareInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Badge_ShareInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
