export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Items_With_AutoInputs = {
    count: NonNullable<unknown>;
    auto: NonNullable<unknown>;
};
/**
* | count__plural | auto__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{count__number} item + {auto__number} dependency" |
* | "one" | * | "{count__number} item + {auto__number} dependencies" |
* | * | "one" | "{count__number} items + {auto__number} dependency" |
* | * | * | "{count__number} items + {auto__number} dependencies" |
*
* @param {Kits_Items_With_AutoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_items_with_auto: ((inputs: Kits_Items_With_AutoInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_With_AutoInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
