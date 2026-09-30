/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_KelvinseekInputs */

const en_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const es_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const de_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const fr_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const it_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const nl_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const pl_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const pt_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const ru_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const sv_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const tr_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const zh_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

const ja_console_nav_kelvinseek = /** @type {(inputs: Console_Nav_KelvinseekInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek`)
};

/**
* | output |
* | --- |
* | "KelvinSeek" |
*
* @param {Console_Nav_KelvinseekInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_kelvinseek = /** @type {((inputs?: Console_Nav_KelvinseekInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_KelvinseekInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_kelvinseek(inputs)
	if (locale === "de") return de_console_nav_kelvinseek(inputs)
	if (locale === "fr") return fr_console_nav_kelvinseek(inputs)
	if (locale === "it") return it_console_nav_kelvinseek(inputs)
	if (locale === "nl") return nl_console_nav_kelvinseek(inputs)
	if (locale === "pl") return pl_console_nav_kelvinseek(inputs)
	if (locale === "pt") return pt_console_nav_kelvinseek(inputs)
	if (locale === "ru") return ru_console_nav_kelvinseek(inputs)
	if (locale === "sv") return sv_console_nav_kelvinseek(inputs)
	if (locale === "tr") return tr_console_nav_kelvinseek(inputs)
	if (locale === "zh") return zh_console_nav_kelvinseek(inputs)
	if (locale === "ja") return ja_console_nav_kelvinseek(inputs)
	return en_console_nav_kelvinseek(inputs)
});
