/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Comment_DeletedInputs */

const en_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This comment was deleted.`)
};

const es_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentario se ha eliminado.`)
};

const de_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Kommentar wurde gelöscht.`)
};

const fr_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce commentaire a été supprimé.`)
};

const it_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo commento è stato eliminato.`)
};

const nl_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie is verwijderd.`)
};

const pl_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten komentarz został usunięty.`)
};

const pt_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentário foi excluído.`)
};

const ru_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот комментарий удалён.`)
};

const sv_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här kommentaren har tagits bort.`)
};

const tr_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorum silindi.`)
};

const zh_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此评论已删除。`)
};

const ja_ui_domain_comment_deleted = /** @type {(inputs: Ui_Domain_Comment_DeletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントは削除されました。`)
};

/**
* | output |
* | --- |
* | "This comment was deleted." |
*
* @param {Ui_Domain_Comment_DeletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_comment_deleted = /** @type {((inputs?: Ui_Domain_Comment_DeletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Comment_DeletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_comment_deleted(inputs)
	if (locale === "de") return de_ui_domain_comment_deleted(inputs)
	if (locale === "fr") return fr_ui_domain_comment_deleted(inputs)
	if (locale === "it") return it_ui_domain_comment_deleted(inputs)
	if (locale === "nl") return nl_ui_domain_comment_deleted(inputs)
	if (locale === "pl") return pl_ui_domain_comment_deleted(inputs)
	if (locale === "pt") return pt_ui_domain_comment_deleted(inputs)
	if (locale === "ru") return ru_ui_domain_comment_deleted(inputs)
	if (locale === "sv") return sv_ui_domain_comment_deleted(inputs)
	if (locale === "tr") return tr_ui_domain_comment_deleted(inputs)
	if (locale === "zh") return zh_ui_domain_comment_deleted(inputs)
	if (locale === "ja") return ja_ui_domain_comment_deleted(inputs)
	return en_ui_domain_comment_deleted(inputs)
});
