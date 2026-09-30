export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Compat_BrokenInputs = {
    mod: NonNullable<unknown>;
    status: NonNullable<unknown>;
    build: NonNullable<unknown>;
};
/**
* | status | output |
* | --- | --- |
* | "broken" | "{mod} is reported broken on {build}" |
* | * | "{mod} is reported mixed on {build}" |
*
* @param {Signals_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_compat_broken: ((inputs: Signals_Compat_BrokenInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Compat_BrokenInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
