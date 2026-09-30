/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_JamsInputs */

const en_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const es_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const de_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Jams`)
};

const fr_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const it_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam`)
};

const nl_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const pl_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jamy`)
};

const pt_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const ru_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод-джемы`)
};

const sv_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jams`)
};

const tr_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod Jam'leri`)
};

const zh_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组 Jam`)
};

const ja_console_nav_jams = /** @type {(inputs: Console_Nav_JamsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod ジャム`)
};

/**
* | output |
* | --- |
* | "Mod Jams" |
*
* @param {Console_Nav_JamsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_jams = /** @type {((inputs?: Console_Nav_JamsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_JamsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_jams(inputs)
	if (locale === "de") return de_console_nav_jams(inputs)
	if (locale === "fr") return fr_console_nav_jams(inputs)
	if (locale === "it") return it_console_nav_jams(inputs)
	if (locale === "nl") return nl_console_nav_jams(inputs)
	if (locale === "pl") return pl_console_nav_jams(inputs)
	if (locale === "pt") return pt_console_nav_jams(inputs)
	if (locale === "ru") return ru_console_nav_jams(inputs)
	if (locale === "sv") return sv_console_nav_jams(inputs)
	if (locale === "tr") return tr_console_nav_jams(inputs)
	if (locale === "zh") return zh_console_nav_jams(inputs)
	if (locale === "ja") return ja_console_nav_jams(inputs)
	return en_console_nav_jams(inputs)
});
