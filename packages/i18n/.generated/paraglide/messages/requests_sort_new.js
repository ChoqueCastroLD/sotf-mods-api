/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sort_NewInputs */

const en_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes`)
};

const de_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus récentes`)
};

const it_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più recenti`)
};

const nl_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes`)
};

const ru_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste`)
};

const tr_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_requests_sort_new = /** @type {(inputs: Requests_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着順`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Requests_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sort_new = /** @type {((inputs?: Requests_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sort_new(inputs)
	if (locale === "de") return de_requests_sort_new(inputs)
	if (locale === "fr") return fr_requests_sort_new(inputs)
	if (locale === "it") return it_requests_sort_new(inputs)
	if (locale === "nl") return nl_requests_sort_new(inputs)
	if (locale === "pl") return pl_requests_sort_new(inputs)
	if (locale === "pt") return pt_requests_sort_new(inputs)
	if (locale === "ru") return ru_requests_sort_new(inputs)
	if (locale === "sv") return sv_requests_sort_new(inputs)
	if (locale === "tr") return tr_requests_sort_new(inputs)
	if (locale === "zh") return zh_requests_sort_new(inputs)
	if (locale === "ja") return ja_requests_sort_new(inputs)
	return en_requests_sort_new(inputs)
});
