/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Shortcuts_ThenInputs */

const en_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`then`)
};

const es_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`y luego`)
};

const de_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`dann`)
};

const fr_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`puis`)
};

const it_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`poi`)
};

const nl_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`daarna`)
};

const pl_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`potem`)
};

const pt_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`depois`)
};

const ru_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`затем`)
};

const sv_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`sedan`)
};

const tr_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ardından`)
};

const zh_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`然后`)
};

const ja_console_shortcuts_then = /** @type {(inputs: Console_Shortcuts_ThenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`の次に`)
};

/**
* | output |
* | --- |
* | "then" |
*
* @param {Console_Shortcuts_ThenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_shortcuts_then = /** @type {((inputs?: Console_Shortcuts_ThenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Shortcuts_ThenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_shortcuts_then(inputs)
	if (locale === "de") return de_console_shortcuts_then(inputs)
	if (locale === "fr") return fr_console_shortcuts_then(inputs)
	if (locale === "it") return it_console_shortcuts_then(inputs)
	if (locale === "nl") return nl_console_shortcuts_then(inputs)
	if (locale === "pl") return pl_console_shortcuts_then(inputs)
	if (locale === "pt") return pt_console_shortcuts_then(inputs)
	if (locale === "ru") return ru_console_shortcuts_then(inputs)
	if (locale === "sv") return sv_console_shortcuts_then(inputs)
	if (locale === "tr") return tr_console_shortcuts_then(inputs)
	if (locale === "zh") return zh_console_shortcuts_then(inputs)
	if (locale === "ja") return ja_console_shortcuts_then(inputs)
	return en_console_shortcuts_then(inputs)
});
