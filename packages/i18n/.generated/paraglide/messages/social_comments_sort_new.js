/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comments_Sort_NewInputs */

const en_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest`)
};

const es_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recientes`)
};

const de_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste`)
};

const fr_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Récents`)
};

const it_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenti`)
};

const nl_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste`)
};

const pl_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze`)
};

const pt_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recentes`)
};

const ru_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyaste`)
};

const tr_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En yeni`)
};

const zh_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_social_comments_sort_new = /** @type {(inputs: Social_Comments_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着`)
};

/**
* | output |
* | --- |
* | "Newest" |
*
* @param {Social_Comments_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comments_sort_new = /** @type {((inputs?: Social_Comments_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comments_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comments_sort_new(inputs)
	if (locale === "de") return de_social_comments_sort_new(inputs)
	if (locale === "fr") return fr_social_comments_sort_new(inputs)
	if (locale === "it") return it_social_comments_sort_new(inputs)
	if (locale === "nl") return nl_social_comments_sort_new(inputs)
	if (locale === "pl") return pl_social_comments_sort_new(inputs)
	if (locale === "pt") return pt_social_comments_sort_new(inputs)
	if (locale === "ru") return ru_social_comments_sort_new(inputs)
	if (locale === "sv") return sv_social_comments_sort_new(inputs)
	if (locale === "tr") return tr_social_comments_sort_new(inputs)
	if (locale === "zh") return zh_social_comments_sort_new(inputs)
	if (locale === "ja") return ja_social_comments_sort_new(inputs)
	return en_social_comments_sort_new(inputs)
});
