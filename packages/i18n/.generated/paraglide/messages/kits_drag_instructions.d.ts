export type LocalizedString = import('../runtime.js').LocalizedString;
export type Kits_Drag_InstructionsInputs = {};
/**
* | output |
* | --- |
* | "To reorder, focus a handle and press Space, move with the arrow keys, then press Space again to drop or Escape to cancel." |
*
* @param {Kits_Drag_InstructionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export declare const kits_drag_instructions: ((inputs?: Kits_Drag_InstructionsInputs, options?: {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Drag_InstructionsInputs, {
    locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja";
}, {}>;
