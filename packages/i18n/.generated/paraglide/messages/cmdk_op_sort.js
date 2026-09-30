/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Op_SortInputs */

const en_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort order`)
};

const es_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orden`)
};

const de_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortierung`)
};

const fr_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tri`)
};

const it_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordinamento`)
};

const nl_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortering`)
};

const pl_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortowanie`)
};

const pt_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenação`)
};

const ru_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка`)
};

const sv_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortering`)
};

const tr_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralama`)
};

const zh_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const ja_cmdk_op_sort = /** @type {(inputs: Cmdk_Op_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並び順`)
};

/**
* | output |
* | --- |
* | "Sort order" |
*
* @param {Cmdk_Op_SortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_op_sort = /** @type {((inputs?: Cmdk_Op_SortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Op_SortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_op_sort(inputs)
	if (locale === "de") return de_cmdk_op_sort(inputs)
	if (locale === "fr") return fr_cmdk_op_sort(inputs)
	if (locale === "it") return it_cmdk_op_sort(inputs)
	if (locale === "nl") return nl_cmdk_op_sort(inputs)
	if (locale === "pl") return pl_cmdk_op_sort(inputs)
	if (locale === "pt") return pt_cmdk_op_sort(inputs)
	if (locale === "ru") return ru_cmdk_op_sort(inputs)
	if (locale === "sv") return sv_cmdk_op_sort(inputs)
	if (locale === "tr") return tr_cmdk_op_sort(inputs)
	if (locale === "zh") return zh_cmdk_op_sort(inputs)
	if (locale === "ja") return ja_cmdk_op_sort(inputs)
	return en_cmdk_op_sort(inputs)
});
