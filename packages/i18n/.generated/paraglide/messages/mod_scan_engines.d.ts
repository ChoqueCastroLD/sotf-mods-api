export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Scan_EnginesInputs = {
    positives: NonNullable<unknown>;
    total: NonNullable<unknown>;
    engine: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{positives__number} of {total__number} {engine} engines flagged the file." |
*
* @param {Mod_Scan_EnginesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_scan_engines: ((inputs: Mod_Scan_EnginesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_EnginesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
