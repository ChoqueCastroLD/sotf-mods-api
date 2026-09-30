/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comments_SortInputs */

const en_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort comments`)
};

const es_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar comentarios`)
};

const de_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare sortieren`)
};

const fr_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier les commentaires`)
};

const it_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina i commenti`)
};

const nl_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties sorteren`)
};

const pl_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj komentarze`)
};

const pt_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar comentários`)
};

const ru_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка комментариев`)
};

const sv_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera kommentarer`)
};

const tr_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumları sırala`)
};

const zh_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论排序`)
};

const ja_social_comments_sort = /** @type {(inputs: Social_Comments_SortInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントの並び順`)
};

/**
* | output |
* | --- |
* | "Sort comments" |
*
* @param {Social_Comments_SortInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comments_sort = /** @type {((inputs?: Social_Comments_SortInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comments_SortInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comments_sort(inputs)
	if (locale === "de") return de_social_comments_sort(inputs)
	if (locale === "fr") return fr_social_comments_sort(inputs)
	if (locale === "it") return it_social_comments_sort(inputs)
	if (locale === "nl") return nl_social_comments_sort(inputs)
	if (locale === "pl") return pl_social_comments_sort(inputs)
	if (locale === "pt") return pt_social_comments_sort(inputs)
	if (locale === "ru") return ru_social_comments_sort(inputs)
	if (locale === "sv") return sv_social_comments_sort(inputs)
	if (locale === "tr") return tr_social_comments_sort(inputs)
	if (locale === "zh") return zh_social_comments_sort(inputs)
	if (locale === "ja") return ja_social_comments_sort(inputs)
	return en_social_comments_sort(inputs)
});
