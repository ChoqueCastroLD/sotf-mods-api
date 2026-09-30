/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Kind_BuildInputs */

const en_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка`)
};

const sv_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı`)
};

const zh_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_basecamp_kind_build = /** @type {(inputs: Basecamp_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Basecamp_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_kind_build = /** @type {((inputs?: Basecamp_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_kind_build(inputs)
	if (locale === "de") return de_basecamp_kind_build(inputs)
	if (locale === "fr") return fr_basecamp_kind_build(inputs)
	if (locale === "it") return it_basecamp_kind_build(inputs)
	if (locale === "nl") return nl_basecamp_kind_build(inputs)
	if (locale === "pl") return pl_basecamp_kind_build(inputs)
	if (locale === "pt") return pt_basecamp_kind_build(inputs)
	if (locale === "ru") return ru_basecamp_kind_build(inputs)
	if (locale === "sv") return sv_basecamp_kind_build(inputs)
	if (locale === "tr") return tr_basecamp_kind_build(inputs)
	if (locale === "zh") return zh_basecamp_kind_build(inputs)
	if (locale === "ja") return ja_basecamp_kind_build(inputs)
	return en_basecamp_kind_build(inputs)
});
