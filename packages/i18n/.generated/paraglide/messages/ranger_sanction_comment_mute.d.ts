export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sanction_Comment_MuteInputs = {};
/**
* | output |
* | --- |
* | "Mute comments" |
*
* @param {Ranger_Sanction_Comment_MuteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sanction_comment_mute: ((inputs?: Ranger_Sanction_Comment_MuteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Comment_MuteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
