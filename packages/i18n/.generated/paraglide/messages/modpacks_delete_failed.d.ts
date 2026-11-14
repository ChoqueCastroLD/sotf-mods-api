export type LocalizedString = import('../runtime.js').LocalizedString;
export type Modpacks_Delete_FailedInputs = {};
/**
* | output |
* | --- |
* | "Couldn't delete the modpack" |
*
* @param {Modpacks_Delete_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const modpacks_delete_failed: ((inputs?: Modpacks_Delete_FailedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Delete_FailedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
