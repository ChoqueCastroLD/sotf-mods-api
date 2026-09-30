export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Badges_Welcome_SignalInputs = {
    badgeCount: NonNullable<unknown>;
};
/**
* | badgeCount__plural | output |
* | --- | --- |
* | "one" | "Welcome to v2: you earned {badgeCount__number} badge" |
* | * | "Welcome to v2: you earned {badgeCount__number} badges" |
*
* @param {Profile_Badges_Welcome_SignalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_badges_welcome_signal: ((inputs: Profile_Badges_Welcome_SignalInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Welcome_SignalInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
