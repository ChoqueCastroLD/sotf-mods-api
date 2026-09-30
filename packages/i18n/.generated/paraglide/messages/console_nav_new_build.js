/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_New_BuildInputs */

const en_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New build`)
};

const es_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nueva build`)
};

const de_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Build`)
};

const fr_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau build`)
};

const it_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova build`)
};

const nl_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe build`)
};

const pl_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa budowla`)
};

const pt_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova build`)
};

const ru_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая постройка`)
};

const sv_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt bygge`)
};

const tr_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni yapı`)
};

const zh_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建建筑`)
};

const ja_console_nav_new_build = /** @type {(inputs: Console_Nav_New_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい建築`)
};

/**
* | output |
* | --- |
* | "New build" |
*
* @param {Console_Nav_New_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_new_build = /** @type {((inputs?: Console_Nav_New_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_New_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_new_build(inputs)
	if (locale === "de") return de_console_nav_new_build(inputs)
	if (locale === "fr") return fr_console_nav_new_build(inputs)
	if (locale === "it") return it_console_nav_new_build(inputs)
	if (locale === "nl") return nl_console_nav_new_build(inputs)
	if (locale === "pl") return pl_console_nav_new_build(inputs)
	if (locale === "pt") return pt_console_nav_new_build(inputs)
	if (locale === "ru") return ru_console_nav_new_build(inputs)
	if (locale === "sv") return sv_console_nav_new_build(inputs)
	if (locale === "tr") return tr_console_nav_new_build(inputs)
	if (locale === "zh") return zh_console_nav_new_build(inputs)
	if (locale === "ja") return ja_console_nav_new_build(inputs)
	return en_console_nav_new_build(inputs)
});
