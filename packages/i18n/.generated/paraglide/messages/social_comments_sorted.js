/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comments_SortedInputs */

const en_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments sorted.`)
};

const es_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios ordenados.`)
};

const de_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare sortiert.`)
};

const fr_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires triés.`)
};

const it_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti ordinati.`)
};

const nl_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties gesorteerd.`)
};

const pl_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze posortowane.`)
};

const pt_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários ordenados.`)
};

const ru_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии отсортированы.`)
};

const sv_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarerna är sorterade.`)
};

const tr_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar sıralandı.`)
};

const zh_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已排序。`)
};

const ja_social_comments_sorted = /** @type {(inputs: Social_Comments_SortedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを並べ替えました。`)
};

/**
* | output |
* | --- |
* | "Comments sorted." |
*
* @param {Social_Comments_SortedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comments_sorted = /** @type {((inputs?: Social_Comments_SortedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comments_SortedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comments_sorted(inputs)
	if (locale === "de") return de_social_comments_sorted(inputs)
	if (locale === "fr") return fr_social_comments_sorted(inputs)
	if (locale === "it") return it_social_comments_sorted(inputs)
	if (locale === "nl") return nl_social_comments_sorted(inputs)
	if (locale === "pl") return pl_social_comments_sorted(inputs)
	if (locale === "pt") return pt_social_comments_sorted(inputs)
	if (locale === "ru") return ru_social_comments_sorted(inputs)
	if (locale === "sv") return sv_social_comments_sorted(inputs)
	if (locale === "tr") return tr_social_comments_sorted(inputs)
	if (locale === "zh") return zh_social_comments_sorted(inputs)
	if (locale === "ja") return ja_social_comments_sorted(inputs)
	return en_social_comments_sorted(inputs)
});
