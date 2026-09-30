/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comments_Sort_TopInputs */

const en_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top`)
};

const es_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destacados`)
};

const de_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top`)
};

const fr_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meilleurs`)
};

const it_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Migliori`)
};

const nl_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Top`)
};

const pl_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze`)
};

const pt_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Destaques`)
};

const ru_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие`)
};

const sv_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toppen`)
};

const tr_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi`)
};

const zh_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`热门`)
};

const ja_social_comments_sort_top = /** @type {(inputs: Social_Comments_Sort_TopInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`人気`)
};

/**
* | output |
* | --- |
* | "Top" |
*
* @param {Social_Comments_Sort_TopInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comments_sort_top = /** @type {((inputs?: Social_Comments_Sort_TopInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comments_Sort_TopInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comments_sort_top(inputs)
	if (locale === "de") return de_social_comments_sort_top(inputs)
	if (locale === "fr") return fr_social_comments_sort_top(inputs)
	if (locale === "it") return it_social_comments_sort_top(inputs)
	if (locale === "nl") return nl_social_comments_sort_top(inputs)
	if (locale === "pl") return pl_social_comments_sort_top(inputs)
	if (locale === "pt") return pt_social_comments_sort_top(inputs)
	if (locale === "ru") return ru_social_comments_sort_top(inputs)
	if (locale === "sv") return sv_social_comments_sort_top(inputs)
	if (locale === "tr") return tr_social_comments_sort_top(inputs)
	if (locale === "zh") return zh_social_comments_sort_top(inputs)
	if (locale === "ja") return ja_social_comments_sort_top(inputs)
	return en_social_comments_sort_top(inputs)
});
