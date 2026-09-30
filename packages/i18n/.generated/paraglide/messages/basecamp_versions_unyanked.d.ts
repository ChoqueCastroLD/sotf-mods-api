export type LocalizedString = import('../runtime.js').LocalizedString;
export type Basecamp_Versions_UnyankedInputs = {
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "v{version} is available again" |
*
* @param {Basecamp_Versions_UnyankedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const basecamp_versions_unyanked: ((inputs: Basecamp_Versions_UnyankedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_UnyankedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
