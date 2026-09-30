/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Type_CommentInputs */

const en_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment`)
};

const es_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario`)
};

const de_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar`)
};

const fr_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire`)
};

const it_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento`)
};

const nl_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie`)
};

const pl_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz`)
};

const pt_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário`)
};

const ru_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий`)
};

const sv_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar`)
};

const tr_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum`)
};

const zh_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论`)
};

const ja_basecamp_inbox_type_comment = /** @type {(inputs: Basecamp_Inbox_Type_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント`)
};

/**
* | output |
* | --- |
* | "Comment" |
*
* @param {Basecamp_Inbox_Type_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_type_comment = /** @type {((inputs?: Basecamp_Inbox_Type_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Type_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_type_comment(inputs)
	if (locale === "de") return de_basecamp_inbox_type_comment(inputs)
	if (locale === "fr") return fr_basecamp_inbox_type_comment(inputs)
	if (locale === "it") return it_basecamp_inbox_type_comment(inputs)
	if (locale === "nl") return nl_basecamp_inbox_type_comment(inputs)
	if (locale === "pl") return pl_basecamp_inbox_type_comment(inputs)
	if (locale === "pt") return pt_basecamp_inbox_type_comment(inputs)
	if (locale === "ru") return ru_basecamp_inbox_type_comment(inputs)
	if (locale === "sv") return sv_basecamp_inbox_type_comment(inputs)
	if (locale === "tr") return tr_basecamp_inbox_type_comment(inputs)
	if (locale === "zh") return zh_basecamp_inbox_type_comment(inputs)
	if (locale === "ja") return ja_basecamp_inbox_type_comment(inputs)
	return en_basecamp_inbox_type_comment(inputs)
});
