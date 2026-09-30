/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Comment_Delete_TitleInputs */

const en_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this comment?`)
};

const es_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar este comentario?`)
};

const de_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Kommentar löschen?`)
};

const fr_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer ce commentaire ?`)
};

const it_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare questo commento?`)
};

const nl_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie verwijderen?`)
};

const pl_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć ten komentarz?`)
};

const pt_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este comentário?`)
};

const ru_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот комментарий?`)
};

const sv_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort den här kommentaren?`)
};

const tr_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorum silinsin mi?`)
};

const zh_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除此评论？`)
};

const ja_requests_comment_delete_title = /** @type {(inputs: Requests_Comment_Delete_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントを削除しますか？`)
};

/**
* | output |
* | --- |
* | "Delete this comment?" |
*
* @param {Requests_Comment_Delete_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_comment_delete_title = /** @type {((inputs?: Requests_Comment_Delete_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Comment_Delete_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_comment_delete_title(inputs)
	if (locale === "de") return de_requests_comment_delete_title(inputs)
	if (locale === "fr") return fr_requests_comment_delete_title(inputs)
	if (locale === "it") return it_requests_comment_delete_title(inputs)
	if (locale === "nl") return nl_requests_comment_delete_title(inputs)
	if (locale === "pl") return pl_requests_comment_delete_title(inputs)
	if (locale === "pt") return pt_requests_comment_delete_title(inputs)
	if (locale === "ru") return ru_requests_comment_delete_title(inputs)
	if (locale === "sv") return sv_requests_comment_delete_title(inputs)
	if (locale === "tr") return tr_requests_comment_delete_title(inputs)
	if (locale === "zh") return zh_requests_comment_delete_title(inputs)
	if (locale === "ja") return ja_requests_comment_delete_title(inputs)
	return en_requests_comment_delete_title(inputs)
});
