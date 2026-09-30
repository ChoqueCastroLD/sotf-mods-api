export type LocalizedString = import('../runtime.js').LocalizedString;
export type Oauth_Connected_AsInputs = {
    username: NonNullable<unknown>;
    date: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Connected as {username} since {date}" |
*
* @param {Oauth_Connected_AsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const oauth_connected_as: ((inputs: Oauth_Connected_AsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Oauth_Connected_AsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
