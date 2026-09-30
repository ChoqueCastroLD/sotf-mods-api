/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sort_TopInputs */

const en_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most voted`)
};

const es_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más votadas`)
};

const de_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistgewählt`)
};

const fr_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus votées`)
};

const it_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più votate`)
};

const nl_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste stemmen`)
};

const pl_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej głosowane`)
};

const pt_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais votados`)
};

const ru_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше голосов`)
};

const sv_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest röster`)
};

const tr_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok oy alan`)
};

const zh_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`票数最多`)
};

const ja_requests_sort_top = /** @type {(inputs: Requests_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`投票が多い順`)
};

/**
* | output |
* | --- |
* | "Most voted" |
*
* @param {Requests_Sort_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sort_top = /** @type {((inputs?: Requests_Sort_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sort_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sort_top(inputs)
	if (locale === "de") return de_requests_sort_top(inputs)
	if (locale === "fr") return fr_requests_sort_top(inputs)
	if (locale === "it") return it_requests_sort_top(inputs)
	if (locale === "nl") return nl_requests_sort_top(inputs)
	if (locale === "pl") return pl_requests_sort_top(inputs)
	if (locale === "pt") return pt_requests_sort_top(inputs)
	if (locale === "ru") return ru_requests_sort_top(inputs)
	if (locale === "sv") return sv_requests_sort_top(inputs)
	if (locale === "tr") return tr_requests_sort_top(inputs)
	if (locale === "zh") return zh_requests_sort_top(inputs)
	if (locale === "ja") return ja_requests_sort_top(inputs)
	return en_requests_sort_top(inputs)
});
