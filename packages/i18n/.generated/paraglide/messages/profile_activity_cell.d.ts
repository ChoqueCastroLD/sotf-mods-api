export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Activity_CellInputs = {
    date: NonNullable<unknown>;
    detail: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{date}: {detail}" |
*
* @param {Profile_Activity_CellInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_activity_cell: ((inputs: Profile_Activity_CellInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_CellInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
