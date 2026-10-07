export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Kpi_Pending_DetailInputs = {
    versions: NonNullable<unknown>;
    mods: NonNullable<unknown>;
};
/**
* | versions__plural | mods__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{versions__number} version, {mods__number} mod" |
* | "one" | * | "{versions__number} version, {mods__number} mods" |
* | * | "one" | "{versions__number} versions, {mods__number} mod" |
* | * | * | "{versions__number} versions, {mods__number} mods" |
*
* @param {Basecamp_Kpi_Pending_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_kpi_pending_detail: ((inputs: Basecamp_Kpi_Pending_DetailInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kpi_Pending_DetailInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
