export type LocalizedString = import('../runtime.js').LocalizedString;
export type Ranger_User_Sessions_RevokedInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No session was open." |
* | * | "one" | "{count__number} session ended." |
* | * | * | "{count__number} sessions ended." |
*
* @param {Ranger_User_Sessions_RevokedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const ranger_user_sessions_revoked: ((inputs: Ranger_User_Sessions_RevokedInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_User_Sessions_RevokedInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
