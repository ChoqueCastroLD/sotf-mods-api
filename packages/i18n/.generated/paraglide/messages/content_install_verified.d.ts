export type LocalizedString = import('../runtime.js').LocalizedString;
export type Content_Install_VerifiedInputs = {
    game: NonNullable<unknown>;
    loader: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Verified with game {game} · RedLoader {loader}" |
*
* @param {Content_Install_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const content_install_verified: ((inputs: Content_Install_VerifiedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Install_VerifiedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
