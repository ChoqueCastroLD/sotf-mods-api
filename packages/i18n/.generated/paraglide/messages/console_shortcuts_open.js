/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcuts_OpenInputs */

const en_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keyboard shortcuts`)
};

const es_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atajos de teclado`)
};

const de_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tastenkürzel`)
};

const fr_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raccourcis clavier`)
};

const it_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scorciatoie da tastiera`)
};

const nl_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sneltoetsen`)
};

const pl_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skróty klawiszowe`)
};

const pt_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atalhos de teclado`)
};

const ru_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Горячие клавиши`)
};

const sv_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kortkommandon`)
};

const tr_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klavye kısayolları`)
};

const zh_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`键盘快捷键`)
};

const ja_console_shortcuts_open = /** @type {(inputs: Console_Shortcuts_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーボードショートカット`)
};

/**
* | output |
* | --- |
* | "Keyboard shortcuts" |
*
* @param {Console_Shortcuts_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcuts_open = /** @type {((inputs?: Console_Shortcuts_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcuts_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcuts_open(inputs)
	if (locale === "de") return de_console_shortcuts_open(inputs)
	if (locale === "fr") return fr_console_shortcuts_open(inputs)
	if (locale === "it") return it_console_shortcuts_open(inputs)
	if (locale === "nl") return nl_console_shortcuts_open(inputs)
	if (locale === "pl") return pl_console_shortcuts_open(inputs)
	if (locale === "pt") return pt_console_shortcuts_open(inputs)
	if (locale === "ru") return ru_console_shortcuts_open(inputs)
	if (locale === "sv") return sv_console_shortcuts_open(inputs)
	if (locale === "tr") return tr_console_shortcuts_open(inputs)
	if (locale === "zh") return zh_console_shortcuts_open(inputs)
	if (locale === "ja") return ja_console_shortcuts_open(inputs)
	return en_console_shortcuts_open(inputs)
});
