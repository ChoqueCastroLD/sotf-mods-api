/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_DeletedInputs */

const en_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment deleted.`)
};

const es_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentario eliminado.`)
};

const de_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentar gelöscht.`)
};

const fr_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commentaire supprimé.`)
};

const it_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Commento eliminato.`)
};

const nl_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reactie verwijderd.`)
};

const pl_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Komentarz usunięty.`)
};

const pt_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comentário excluído.`)
};

const ru_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Комментарий удалён.`)
};

const sv_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren är raderad.`)
};

const tr_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum silindi.`)
};

const zh_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`评论已删除。`)
};

const ja_social_comment_deleted = /** @type {(inputs: Social_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを削除しました。`)
};

/**
* | output |
* | --- |
* | "Comment deleted." |
*
* @param {Social_Comment_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_deleted = /** @type {((inputs?: Social_Comment_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_deleted(inputs)
	if (locale === "de") return de_social_comment_deleted(inputs)
	if (locale === "fr") return fr_social_comment_deleted(inputs)
	if (locale === "it") return it_social_comment_deleted(inputs)
	if (locale === "nl") return nl_social_comment_deleted(inputs)
	if (locale === "pl") return pl_social_comment_deleted(inputs)
	if (locale === "pt") return pt_social_comment_deleted(inputs)
	if (locale === "ru") return ru_social_comment_deleted(inputs)
	if (locale === "sv") return sv_social_comment_deleted(inputs)
	if (locale === "tr") return tr_social_comment_deleted(inputs)
	if (locale === "zh") return zh_social_comment_deleted(inputs)
	if (locale === "ja") return ja_social_comment_deleted(inputs)
	return en_social_comment_deleted(inputs)
});
