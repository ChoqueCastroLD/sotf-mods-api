export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Downloads_LastInputs = {
    version: NonNullable<unknown>;
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You downloaded {version} on {date}" |
*
* @param {Me_Downloads_LastInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_downloads_last: ((inputs: Me_Downloads_LastInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Downloads_LastInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
