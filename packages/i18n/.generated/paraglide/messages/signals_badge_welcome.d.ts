export type LocalizedString = import('../runtime.js').LocalizedString;
export type Signals_Badge_WelcomeInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "Welcome to the new SOTF Mods" |
* | * | "one" | "Welcome to the new SOTF Mods — {count__number} badge is waiting in your field guide" |
* | * | * | "Welcome to the new SOTF Mods — {count__number} badges are waiting in your field guide" |
*
* @param {Signals_Badge_WelcomeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const signals_badge_welcome: ((inputs: Signals_Badge_WelcomeInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_WelcomeInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
