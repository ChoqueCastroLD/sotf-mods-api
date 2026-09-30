export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Recat_Applied_Tags_SkippedInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod kept its tags (not public or already full)." |
* | * | "{count__number} mods kept their tags (not public or already full)." |
*
* @param {Admin_Recat_Applied_Tags_SkippedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_recat_applied_tags_skipped: ((inputs: Admin_Recat_Applied_Tags_SkippedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Applied_Tags_SkippedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
