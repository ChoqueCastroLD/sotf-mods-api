/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_CommentsInputs */

const en_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most discussed`)
};

const es_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más comentados`)
};

const de_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meistdiskutiert`)
};

const fr_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus commentés`)
};

const it_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più commentate`)
};

const nl_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest besproken`)
};

const pl_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej komentowane`)
};

const pt_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais comentados`)
};

const ru_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше обсуждений`)
};

const sv_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest diskuterade`)
};

const tr_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok konuşulan`)
};

const zh_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`讨论最多`)
};

const ja_explore_sort_comments = /** @type {(inputs: Explore_Sort_CommentsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント数順`)
};

/**
* | output |
* | --- |
* | "Most discussed" |
*
* @param {Explore_Sort_CommentsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_comments = /** @type {((inputs?: Explore_Sort_CommentsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_CommentsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_comments(inputs)
	if (locale === "de") return de_explore_sort_comments(inputs)
	if (locale === "fr") return fr_explore_sort_comments(inputs)
	if (locale === "it") return it_explore_sort_comments(inputs)
	if (locale === "nl") return nl_explore_sort_comments(inputs)
	if (locale === "pl") return pl_explore_sort_comments(inputs)
	if (locale === "pt") return pt_explore_sort_comments(inputs)
	if (locale === "ru") return ru_explore_sort_comments(inputs)
	if (locale === "sv") return sv_explore_sort_comments(inputs)
	if (locale === "tr") return tr_explore_sort_comments(inputs)
	if (locale === "zh") return zh_explore_sort_comments(inputs)
	if (locale === "ja") return ja_explore_sort_comments(inputs)
	return en_explore_sort_comments(inputs)
});
