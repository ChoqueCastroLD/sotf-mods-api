export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Version_Meta_DescriptionInputs = {
    name: NonNullable<unknown>;
    version: NonNullable<unknown>;
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{name} v{version} for Sons of the Forest, released {date}: changelog, file size, SHA-256, security scan and compatibility." |
*
* @param {Mod_Version_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_version_meta_description: ((inputs: Mod_Version_Meta_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Version_Meta_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
