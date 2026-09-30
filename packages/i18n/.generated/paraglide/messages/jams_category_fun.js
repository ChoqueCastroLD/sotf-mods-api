/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Category_FunInputs */

const en_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fun`)
};

const es_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diversión`)
};

const de_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spielspaß`)
};

const fr_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Amusement`)
};

const it_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Divertimento`)
};

const nl_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plezier`)
};

const pl_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zabawa`)
};

const pt_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diversão`)
};

const ru_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Веселье`)
};

const sv_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kul`)
};

const tr_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eğlence`)
};

const zh_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`趣味性`)
};

const ja_jams_category_fun = /** @type {(inputs: Jams_Category_FunInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`楽しさ`)
};

/**
* | output |
* | --- |
* | "Fun" |
*
* @param {Jams_Category_FunInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_category_fun = /** @type {((inputs?: Jams_Category_FunInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Category_FunInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_category_fun(inputs)
	if (locale === "de") return de_jams_category_fun(inputs)
	if (locale === "fr") return fr_jams_category_fun(inputs)
	if (locale === "it") return it_jams_category_fun(inputs)
	if (locale === "nl") return nl_jams_category_fun(inputs)
	if (locale === "pl") return pl_jams_category_fun(inputs)
	if (locale === "pt") return pt_jams_category_fun(inputs)
	if (locale === "ru") return ru_jams_category_fun(inputs)
	if (locale === "sv") return sv_jams_category_fun(inputs)
	if (locale === "tr") return tr_jams_category_fun(inputs)
	if (locale === "zh") return zh_jams_category_fun(inputs)
	if (locale === "ja") return ja_jams_category_fun(inputs)
	return en_jams_category_fun(inputs)
});
