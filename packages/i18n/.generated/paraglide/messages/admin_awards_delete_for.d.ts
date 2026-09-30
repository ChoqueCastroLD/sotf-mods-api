export type LocalizedString = import('../runtime.js').LocalizedString;
export type Admin_Awards_Delete_ForInputs = {
    kind: NonNullable<unknown>;
    name: NonNullable<unknown>;
};
/**
* | output |
* | --- |
* | "Withdraw {kind} from {name}" |
*
* @param {Admin_Awards_Delete_ForInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const admin_awards_delete_for: ((inputs: Admin_Awards_Delete_ForInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Delete_ForInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
