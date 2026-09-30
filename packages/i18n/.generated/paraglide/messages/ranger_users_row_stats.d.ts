export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Users_Row_StatsInputs = {
    mods: NonNullable<unknown>;
    reports: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Mods: {mods} · Reports against: {reports}" |
*
* @param {Ranger_Users_Row_StatsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_users_row_stats: ((inputs: Ranger_Users_Row_StatsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Users_Row_StatsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
