/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comments_TitleInputs */

const en_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comments`)
};

const es_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentarios`)
};

const de_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentare`)
};

const fr_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaires`)
};

const it_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commenti`)
};

const nl_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reacties`)
};

const pl_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarze`)
};

const pt_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentários`)
};

const ru_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарии`)
};

const sv_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentarer`)
};

const tr_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumlar`)
};

const zh_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_requests_comments_title = /** @type {(inputs: Requests_Comments_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comments" |
*
* @param {Requests_Comments_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comments_title = /** @type {((inputs?: Requests_Comments_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comments_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comments_title(inputs)
	if (locale === "de") return de_requests_comments_title(inputs)
	if (locale === "fr") return fr_requests_comments_title(inputs)
	if (locale === "it") return it_requests_comments_title(inputs)
	if (locale === "nl") return nl_requests_comments_title(inputs)
	if (locale === "pl") return pl_requests_comments_title(inputs)
	if (locale === "pt") return pt_requests_comments_title(inputs)
	if (locale === "ru") return ru_requests_comments_title(inputs)
	if (locale === "sv") return sv_requests_comments_title(inputs)
	if (locale === "tr") return tr_requests_comments_title(inputs)
	if (locale === "zh") return zh_requests_comments_title(inputs)
	if (locale === "ja") return ja_requests_comments_title(inputs)
	return en_requests_comments_title(inputs)
});
