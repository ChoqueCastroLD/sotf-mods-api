export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Share_Qr_AltInputs = {
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "QR code of the short link to {name}" |
*
* @param {Kits_Share_Qr_AltInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_share_qr_alt: ((inputs: Kits_Share_Qr_AltInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Qr_AltInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
