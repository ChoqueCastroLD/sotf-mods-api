export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Xp_Limit_DailyInputs = {
    count: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{count__number} per day" |
*
* @param {Profile_Xp_Limit_DailyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_xp_limit_daily: ((inputs: Profile_Xp_Limit_DailyInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_DailyInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
