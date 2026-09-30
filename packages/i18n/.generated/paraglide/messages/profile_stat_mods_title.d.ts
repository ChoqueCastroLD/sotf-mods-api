export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Stat_Mods_TitleInputs = {
    mods: NonNullable<unknown>;
    builds: NonNullable<unknown>;
};
/**
* | mods__plural | builds__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{mods__number} mod and {builds__number} build" |
* | "one" | * | "{mods__number} mod and {builds__number} builds" |
* | * | "one" | "{mods__number} mods and {builds__number} build" |
* | * | * | "{mods__number} mods and {builds__number} builds" |
*
* @param {Profile_Stat_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_stat_mods_title: ((inputs: Profile_Stat_Mods_TitleInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Stat_Mods_TitleInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
