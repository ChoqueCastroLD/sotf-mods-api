export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Share_Markdown_SuffixInputs = {
    count: NonNullable<unknown>;
    code: NonNullable<unknown>;
};
/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod · code {code}" |
* | * | "{count__number} mods · code {code}" |
*
* @param {Kits_Share_Markdown_SuffixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_share_markdown_suffix: ((inputs: Kits_Share_Markdown_SuffixInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Markdown_SuffixInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
