export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_File_Intro_VersionInputs = {
    name: NonNullable<unknown>;
    manifestId: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Upload the new file of {name}. Its manifest id must be {manifestId} and its version greater than {version}." |
*
* @param {Upload_File_Intro_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_file_intro_version: ((inputs: Upload_File_Intro_VersionInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_File_Intro_VersionInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
