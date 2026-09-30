/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Sort_NewInputs */

const en_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes`)
};

const de_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus récents`)
};

const it_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes`)
};

const ru_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste`)
};

const tr_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_cmdk_sort_new = /** @type {(inputs: Cmdk_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着順`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Cmdk_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_sort_new = /** @type {((inputs?: Cmdk_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_sort_new(inputs)
	if (locale === "de") return de_cmdk_sort_new(inputs)
	if (locale === "fr") return fr_cmdk_sort_new(inputs)
	if (locale === "it") return it_cmdk_sort_new(inputs)
	if (locale === "nl") return nl_cmdk_sort_new(inputs)
	if (locale === "pl") return pl_cmdk_sort_new(inputs)
	if (locale === "pt") return pt_cmdk_sort_new(inputs)
	if (locale === "ru") return ru_cmdk_sort_new(inputs)
	if (locale === "sv") return sv_cmdk_sort_new(inputs)
	if (locale === "tr") return tr_cmdk_sort_new(inputs)
	if (locale === "zh") return zh_cmdk_sort_new(inputs)
	if (locale === "ja") return ja_cmdk_sort_new(inputs)
	return en_cmdk_sort_new(inputs)
});
