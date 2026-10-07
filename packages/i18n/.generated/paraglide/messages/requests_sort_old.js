/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sort_OldInputs */

const en_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest`)
};

const es_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más antiguas`)
};

const de_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste`)
};

const fr_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus anciennes`)
};

const it_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più vecchie`)
};

const nl_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste`)
};

const pl_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze`)
};

const pt_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigos`)
};

const ru_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые`)
};

const sv_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldsta`)
};

const tr_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En eski`)
};

const zh_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早`)
};

const ja_requests_sort_old = /** @type {(inputs: Requests_Sort_OldInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い順`)
};

/**
* | output |
* | --- |
* | "Oldest" |
*
* @param {Requests_Sort_OldInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sort_old = /** @type {((inputs?: Requests_Sort_OldInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sort_OldInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sort_old(inputs)
	if (locale === "de") return de_requests_sort_old(inputs)
	if (locale === "fr") return fr_requests_sort_old(inputs)
	if (locale === "it") return it_requests_sort_old(inputs)
	if (locale === "nl") return nl_requests_sort_old(inputs)
	if (locale === "pl") return pl_requests_sort_old(inputs)
	if (locale === "pt") return pt_requests_sort_old(inputs)
	if (locale === "ru") return ru_requests_sort_old(inputs)
	if (locale === "sv") return sv_requests_sort_old(inputs)
	if (locale === "tr") return tr_requests_sort_old(inputs)
	if (locale === "zh") return zh_requests_sort_old(inputs)
	if (locale === "ja") return ja_requests_sort_old(inputs)
	return en_requests_sort_old(inputs)
});
