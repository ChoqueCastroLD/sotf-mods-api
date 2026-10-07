/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Sort_CommentsInputs */

const en_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most discussed`)
};

const es_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más comentadas`)
};

const de_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistdiskutiert`)
};

const fr_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus commentées`)
};

const it_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più discusse`)
};

const nl_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest besproken`)
};

const pl_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej komentowane`)
};

const pt_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais comentados`)
};

const ru_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше обсуждений`)
};

const sv_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest diskuterade`)
};

const tr_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok tartışılan`)
};

const zh_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`讨论最多`)
};

const ja_requests_sort_comments = /** @type {(inputs: Requests_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントが多い順`)
};

/**
* | output |
* | --- |
* | "Most discussed" |
*
* @param {Requests_Sort_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_sort_comments = /** @type {((inputs?: Requests_Sort_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Sort_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_sort_comments(inputs)
	if (locale === "de") return de_requests_sort_comments(inputs)
	if (locale === "fr") return fr_requests_sort_comments(inputs)
	if (locale === "it") return it_requests_sort_comments(inputs)
	if (locale === "nl") return nl_requests_sort_comments(inputs)
	if (locale === "pl") return pl_requests_sort_comments(inputs)
	if (locale === "pt") return pt_requests_sort_comments(inputs)
	if (locale === "ru") return ru_requests_sort_comments(inputs)
	if (locale === "sv") return sv_requests_sort_comments(inputs)
	if (locale === "tr") return tr_requests_sort_comments(inputs)
	if (locale === "zh") return zh_requests_sort_comments(inputs)
	if (locale === "ja") return ja_requests_sort_comments(inputs)
	return en_requests_sort_comments(inputs)
});
