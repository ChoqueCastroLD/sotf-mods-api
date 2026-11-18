/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_ApiInputs */

const en_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const es_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const de_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const fr_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const it_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const nl_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pl_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const pt_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ru_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const sv_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const tr_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const zh_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

const ja_console_nav_api = /** @type {(inputs: Console_Nav_ApiInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API`)
};

/**
* | output |
* | --- |
* | "API" |
*
* @param {Console_Nav_ApiInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_api = /** @type {((inputs?: Console_Nav_ApiInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_ApiInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_api(inputs)
	if (locale === "de") return de_console_nav_api(inputs)
	if (locale === "fr") return fr_console_nav_api(inputs)
	if (locale === "it") return it_console_nav_api(inputs)
	if (locale === "nl") return nl_console_nav_api(inputs)
	if (locale === "pl") return pl_console_nav_api(inputs)
	if (locale === "pt") return pt_console_nav_api(inputs)
	if (locale === "ru") return ru_console_nav_api(inputs)
	if (locale === "sv") return sv_console_nav_api(inputs)
	if (locale === "tr") return tr_console_nav_api(inputs)
	if (locale === "zh") return zh_console_nav_api(inputs)
	if (locale === "ja") return ja_console_nav_api(inputs)
	return en_console_nav_api(inputs)
});
