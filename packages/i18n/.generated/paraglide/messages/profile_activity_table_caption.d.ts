export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Activity_Table_CaptionInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Contributions of {name} per month" |
*
* @param {Profile_Activity_Table_CaptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_activity_table_caption: ((inputs: Profile_Activity_Table_CaptionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_Table_CaptionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
