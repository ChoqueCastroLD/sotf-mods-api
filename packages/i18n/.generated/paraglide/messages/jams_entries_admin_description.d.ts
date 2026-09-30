export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Entries_Admin_DescriptionInputs = {};
/**
* | output |
* | --- |
* | "Entries appear publicly as soon as they are submitted. Hide or disqualify the ones that break the rules." |
*
* @param {Jams_Entries_Admin_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_entries_admin_description: ((inputs?: Jams_Entries_Admin_DescriptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Admin_DescriptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
