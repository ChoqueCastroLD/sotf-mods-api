/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comments_EmptyInputs */

const en_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No comments yet.`)
};

const es_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay comentarios.`)
};

const de_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Kommentare.`)
};

const fr_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de commentaires.`)
};

const it_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun commento.`)
};

const nl_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen reacties.`)
};

const pl_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak komentarzy.`)
};

const pt_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há comentários.`)
};

const ru_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментариев пока нет.`)
};

const sv_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kommentarer än.`)
};

const tr_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yorum yok.`)
};

const zh_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有评论。`)
};

const ja_requests_comments_empty = /** @type {(inputs: Requests_Comments_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだコメントはありません。`)
};

/**
* | output |
* | --- |
* | "No comments yet." |
*
* @param {Requests_Comments_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comments_empty = /** @type {((inputs?: Requests_Comments_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comments_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comments_empty(inputs)
	if (locale === "de") return de_requests_comments_empty(inputs)
	if (locale === "fr") return fr_requests_comments_empty(inputs)
	if (locale === "it") return it_requests_comments_empty(inputs)
	if (locale === "nl") return nl_requests_comments_empty(inputs)
	if (locale === "pl") return pl_requests_comments_empty(inputs)
	if (locale === "pt") return pt_requests_comments_empty(inputs)
	if (locale === "ru") return ru_requests_comments_empty(inputs)
	if (locale === "sv") return sv_requests_comments_empty(inputs)
	if (locale === "tr") return tr_requests_comments_empty(inputs)
	if (locale === "zh") return zh_requests_comments_empty(inputs)
	if (locale === "ja") return ja_requests_comments_empty(inputs)
	return en_requests_comments_empty(inputs)
});
