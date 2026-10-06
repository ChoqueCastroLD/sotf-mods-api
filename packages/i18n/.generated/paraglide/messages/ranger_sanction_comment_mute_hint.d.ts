export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sanction_Comment_Mute_HintInputs = {};
/**
* | output |
* | --- |
* | "Can’t comment or review, everywhere or on one mod." |
*
* @param {Ranger_Sanction_Comment_Mute_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sanction_comment_mute_hint: ((inputs?: Ranger_Sanction_Comment_Mute_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Comment_Mute_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
