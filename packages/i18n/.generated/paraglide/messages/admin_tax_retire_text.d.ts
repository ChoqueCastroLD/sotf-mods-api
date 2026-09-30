export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Tax_Retire_TextInputs = {
    count: NonNullable<unknown>;
};
/**
* | count__exact | count__plural | output |
* | --- | --- | --- |
* | "0" | * | "No published mod uses it. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
* | * | "one" | "{count__number} published mod still uses it: move it first. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
* | * | * | "{count__number} published mods still use it: move them first. Retired categories disappear from menus; their pages redirect through the legacy slugs." |
*
* @param {Admin_Tax_Retire_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_tax_retire_text: ((inputs: Admin_Tax_Retire_TextInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retire_TextInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
