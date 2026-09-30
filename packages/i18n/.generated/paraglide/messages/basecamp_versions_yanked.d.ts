export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_YankedInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "v{version} yanked" |
*
* @param {Basecamp_Versions_YankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_yanked: ((inputs: Basecamp_Versions_YankedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_YankedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
