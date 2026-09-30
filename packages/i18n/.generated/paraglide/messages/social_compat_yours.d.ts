export type LocalizedString = import('../runtime.js').LocalizedString;
export type Social_Compat_YoursInputs = {
    result: NonNullable<unknown>;
    build: NonNullable<unknown>;
    mode: NonNullable<unknown>;
    version: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "You reported «{result}» on {build} ({mode}, v{version})." |
*
* @param {Social_Compat_YoursInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const social_compat_yours: ((inputs: Social_Compat_YoursInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_YoursInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
