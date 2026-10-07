export type LocalizedString = import('../runtime.js').LocalizedString;
export type Upload_Where_Role_ReplacedInputs = {
    role: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Multiplayer answer changed to “{role}” to match the platform." |
*
* @param {Upload_Where_Role_ReplacedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const upload_where_role_replaced: ((inputs: Upload_Where_Role_ReplacedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Where_Role_ReplacedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
