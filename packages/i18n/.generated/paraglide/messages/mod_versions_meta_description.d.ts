export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Versions_Meta_DescriptionInputs = {
    count: NonNullable<unknown>;
    name: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "All {count__number} version of {name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v{version}." |
* | * | "All {count__number} versions of {name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v{version}." |
*
* @param {Mod_Versions_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_versions_meta_description: ((inputs: Mod_Versions_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
