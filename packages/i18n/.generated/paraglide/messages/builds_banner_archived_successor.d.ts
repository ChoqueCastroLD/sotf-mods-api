export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Banner_Archived_SuccessorInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Try {name} instead" |
*
* @param {Builds_Banner_Archived_SuccessorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_banner_archived_successor: ((inputs: Builds_Banner_Archived_SuccessorInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Archived_SuccessorInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
