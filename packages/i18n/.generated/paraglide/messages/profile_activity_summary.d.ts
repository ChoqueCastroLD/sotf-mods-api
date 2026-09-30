export type LocalizedString = import('../runtime.js').LocalizedString;
export type Profile_Activity_SummaryInputs = {
    count: NonNullable<unknown>;
    days: NonNullable<unknown>;
    from: NonNullable<unknown>;
    to: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | days__plural | output |
* | --- | --- | --- | --- |
* | "0" | * | "one" | "No contributions on {days__number} day between {from} and {to}." |
* | "0" | * | * | "No contributions on {days__number} days between {from} and {to}." |
* | * | "one" | "one" | "{count__number} contribution on {days__number} day between {from} and {to}." |
* | * | "one" | * | "{count__number} contribution on {days__number} days between {from} and {to}." |
* | * | * | "one" | "{count__number} contributions on {days__number} day between {from} and {to}." |
* | * | * | * | "{count__number} contributions on {days__number} days between {from} and {to}." |
*
* @param {Profile_Activity_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const profile_activity_summary: ((inputs: Profile_Activity_SummaryInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Activity_SummaryInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
