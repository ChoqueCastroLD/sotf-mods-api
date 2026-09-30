export type LocalizedString = import('../runtime.js').LocalizedString;
export type Cmdk_Act_Id_CopiedInputs = {
    id: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "ID copied: {id}" |
*
* @param {Cmdk_Act_Id_CopiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const cmdk_act_id_copied: ((inputs: Cmdk_Act_Id_CopiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Act_Id_CopiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
