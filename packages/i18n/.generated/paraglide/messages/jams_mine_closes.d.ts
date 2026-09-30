export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Mine_ClosesInputs = {
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Closes {date}" |
*
* @param {Jams_Mine_ClosesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_mine_closes: ((inputs: Jams_Mine_ClosesInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Mine_ClosesInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
