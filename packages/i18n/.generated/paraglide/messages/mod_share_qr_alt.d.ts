export type LocalizedString = import('../runtime.js').LocalizedString;
export type Mod_Share_Qr_AltInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "QR code of the link to {name}" |
*
* @param {Mod_Share_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const mod_share_qr_alt: ((inputs: Mod_Share_Qr_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Share_Qr_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
