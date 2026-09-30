/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Kind_BuildInputs */

const en_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const es_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const de_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const fr_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const it_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const nl_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pl_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const pt_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build`)
};

const ru_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Постройка`)
};

const sv_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bygge`)
};

const tr_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı`)
};

const zh_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑`)
};

const ja_cmdk_kind_build = /** @type {(inputs: Cmdk_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築`)
};

/**
* | output |
* | --- |
* | "Build" |
*
* @param {Cmdk_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_kind_build = /** @type {((inputs?: Cmdk_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_kind_build(inputs)
	if (locale === "de") return de_cmdk_kind_build(inputs)
	if (locale === "fr") return fr_cmdk_kind_build(inputs)
	if (locale === "it") return it_cmdk_kind_build(inputs)
	if (locale === "nl") return nl_cmdk_kind_build(inputs)
	if (locale === "pl") return pl_cmdk_kind_build(inputs)
	if (locale === "pt") return pt_cmdk_kind_build(inputs)
	if (locale === "ru") return ru_cmdk_kind_build(inputs)
	if (locale === "sv") return sv_cmdk_kind_build(inputs)
	if (locale === "tr") return tr_cmdk_kind_build(inputs)
	if (locale === "zh") return zh_cmdk_kind_build(inputs)
	if (locale === "ja") return ja_cmdk_kind_build(inputs)
	return en_cmdk_kind_build(inputs)
});
