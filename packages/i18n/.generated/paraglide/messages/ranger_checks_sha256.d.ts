export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Checks_Sha256Inputs = {
    hash: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "SHA-256 {hash}" |
*
* @param {Ranger_Checks_Sha256Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_checks_sha256: ((inputs: Ranger_Checks_Sha256Inputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_Sha256Inputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
