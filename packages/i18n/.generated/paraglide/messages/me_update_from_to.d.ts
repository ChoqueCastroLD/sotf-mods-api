export type LocalizedString = import('../runtime.js').LocalizedString;
export type Me_Update_From_ToInputs = {
    from: NonNullable<unknown>;
    to: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Update: {from} → {to}" |
*
* @param {Me_Update_From_ToInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const me_update_from_to: ((inputs: Me_Update_From_ToInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Update_From_ToInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
