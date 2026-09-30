export type LocalizedString = import('../runtime.js').LocalizedString;
export type Console_Shortcut_Toggle_SidebarInputs = {};
/**
* | output |
* | --- |
* | "Collapse or expand the sidebar" |
*
* @param {Console_Shortcut_Toggle_SidebarInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const console_shortcut_toggle_sidebar: ((inputs?: Console_Shortcut_Toggle_SidebarInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcut_Toggle_SidebarInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
