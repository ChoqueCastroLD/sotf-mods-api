/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sort_LabelInputs */

const en_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort`)
};

const es_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orden`)
};

const de_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortierung`)
};

const fr_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tri`)
};

const it_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordine`)
};

const nl_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortering`)
};

const pl_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortowanie`)
};

const pt_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordem`)
};

const ru_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка`)
};

const sv_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortering`)
};

const tr_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralama`)
};

const zh_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const ja_requests_sort_label = /** @type {(inputs: Requests_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並び順`)
};

/**
* | output |
* | --- |
* | "Sort" |
*
* @param {Requests_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sort_label = /** @type {((inputs?: Requests_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sort_label(inputs)
	if (locale === "de") return de_requests_sort_label(inputs)
	if (locale === "fr") return fr_requests_sort_label(inputs)
	if (locale === "it") return it_requests_sort_label(inputs)
	if (locale === "nl") return nl_requests_sort_label(inputs)
	if (locale === "pl") return pl_requests_sort_label(inputs)
	if (locale === "pt") return pt_requests_sort_label(inputs)
	if (locale === "ru") return ru_requests_sort_label(inputs)
	if (locale === "sv") return sv_requests_sort_label(inputs)
	if (locale === "tr") return tr_requests_sort_label(inputs)
	if (locale === "zh") return zh_requests_sort_label(inputs)
	if (locale === "ja") return ja_requests_sort_label(inputs)
	return en_requests_sort_label(inputs)
});
