/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_LabelInputs */

const en_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console`)
};

const es_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Consola`)
};

const de_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsole`)
};

const fr_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console`)
};

const it_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console`)
};

const nl_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console`)
};

const pl_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsola`)
};

const pt_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Console`)
};

const ru_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Консоль`)
};

const sv_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsol`)
};

const tr_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konsol`)
};

const zh_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`控制台`)
};

const ja_console_nav_label = /** @type {(inputs: Console_Nav_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンソール`)
};

/**
* | output |
* | --- |
* | "Console" |
*
* @param {Console_Nav_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_label = /** @type {((inputs?: Console_Nav_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_label(inputs)
	if (locale === "de") return de_console_nav_label(inputs)
	if (locale === "fr") return fr_console_nav_label(inputs)
	if (locale === "it") return it_console_nav_label(inputs)
	if (locale === "nl") return nl_console_nav_label(inputs)
	if (locale === "pl") return pl_console_nav_label(inputs)
	if (locale === "pt") return pt_console_nav_label(inputs)
	if (locale === "ru") return ru_console_nav_label(inputs)
	if (locale === "sv") return sv_console_nav_label(inputs)
	if (locale === "tr") return tr_console_nav_label(inputs)
	if (locale === "zh") return zh_console_nav_label(inputs)
	if (locale === "ja") return ja_console_nav_label(inputs)
	return en_console_nav_label(inputs)
});
