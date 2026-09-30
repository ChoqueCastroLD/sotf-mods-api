export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_Sanction_Upload_Mute_HintInputs = {};
/**
* | output |
* | --- |
* | "Can’t publish mods, versions or builds." |
*
* @param {Ranger_Sanction_Upload_Mute_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_sanction_upload_mute_hint: ((inputs?: Ranger_Sanction_Upload_Mute_HintInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_Upload_Mute_HintInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
