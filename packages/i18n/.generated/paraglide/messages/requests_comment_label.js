/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_LabelInputs */

const en_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your comment`)
};

const es_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu comentario`)
};

const de_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Kommentar`)
};

const fr_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre commentaire`)
};

const it_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo commento`)
};

const nl_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je reactie`)
};

const pl_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój komentarz`)
};

const pt_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu comentário`)
};

const ru_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш комментарий`)
};

const sv_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din kommentar`)
};

const tr_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorumunuz`)
};

const zh_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的评论`)
};

const ja_requests_comment_label = /** @type {(inputs: Requests_Comment_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Your comment" |
*
* @param {Requests_Comment_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_label = /** @type {((inputs?: Requests_Comment_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_label(inputs)
	if (locale === "de") return de_requests_comment_label(inputs)
	if (locale === "fr") return fr_requests_comment_label(inputs)
	if (locale === "it") return it_requests_comment_label(inputs)
	if (locale === "nl") return nl_requests_comment_label(inputs)
	if (locale === "pl") return pl_requests_comment_label(inputs)
	if (locale === "pt") return pt_requests_comment_label(inputs)
	if (locale === "ru") return ru_requests_comment_label(inputs)
	if (locale === "sv") return sv_requests_comment_label(inputs)
	if (locale === "tr") return tr_requests_comment_label(inputs)
	if (locale === "zh") return zh_requests_comment_label(inputs)
	if (locale === "ja") return ja_requests_comment_label(inputs)
	return en_requests_comment_label(inputs)
});
