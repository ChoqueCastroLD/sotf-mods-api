export type LocalizedString = import('../runtime.js').LocalizedString;
export type Jams_Editor_Error_OrderInputs = {
    field: NonNullable<unknown>;
    previous: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "{field} can’t be before {previous}." |
*
* @param {Jams_Editor_Error_OrderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const jams_editor_error_order: ((inputs: Jams_Editor_Error_OrderInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Error_OrderInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
