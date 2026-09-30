export type LocalizedString = import('../runtime.js').LocalizedString;
export type Builds_Import_Step3_TextInputs = {
    key: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "In game, press {key} to open BuildShare, pick the blueprint and place it. Right-click switches between corner and free placement, the mouse wheel moves it an..." |
*
* @param {Builds_Import_Step3_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const builds_import_step3_text: ((inputs: Builds_Import_Step3_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Import_Step3_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
