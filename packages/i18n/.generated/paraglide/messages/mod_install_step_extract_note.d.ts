export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Install_Step_Extract_NoteInputs = {};
/**
* | output |
* | --- |
* | "Keep the folder structure of the ZIP. Don’t put the ZIP itself in the folder." |
*
* @param {Mod_Install_Step_Extract_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_install_step_extract_note: ((inputs?: Mod_Install_Step_Extract_NoteInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_Step_Extract_NoteInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
