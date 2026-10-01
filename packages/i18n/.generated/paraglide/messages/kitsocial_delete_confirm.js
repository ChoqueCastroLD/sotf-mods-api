/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Delete_ConfirmInputs */

const en_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete this comment? This cannot be undone.`)
};

const es_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Eliminar este comentario? No se puede deshacer.`)
};

const de_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diesen Kommentar löschen? Das lässt sich nicht rückgängig machen.`)
};

const fr_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer ce commentaire ? Cette action est irréversible.`)
};

const it_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eliminare questo commento? L’azione non si può annullare.`)
};

const nl_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie verwijderen? Dit kan niet ongedaan worden gemaakt.`)
};

const pl_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunąć ten komentarz? Tej operacji nie można cofnąć.`)
};

const pt_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir este comentário? Isso não pode ser desfeito.`)
};

const ru_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить этот комментарий? Это действие нельзя отменить.`)
};

const sv_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort den här kommentaren? Det går inte att ångra.`)
};

const tr_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorum silinsin mi? Bu işlem geri alınamaz.`)
};

const zh_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除这条评论？此操作无法撤销。`)
};

const ja_kitsocial_delete_confirm = /** @type {(inputs: Kitsocial_Delete_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントを削除しますか？この操作は取り消せません。`)
};

/**
* | output |
* | --- |
* | "Delete this comment? This cannot be undone." |
*
* @param {Kitsocial_Delete_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_delete_confirm = /** @type {((inputs?: Kitsocial_Delete_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Delete_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_delete_confirm(inputs)
	if (locale === "de") return de_kitsocial_delete_confirm(inputs)
	if (locale === "fr") return fr_kitsocial_delete_confirm(inputs)
	if (locale === "it") return it_kitsocial_delete_confirm(inputs)
	if (locale === "nl") return nl_kitsocial_delete_confirm(inputs)
	if (locale === "pl") return pl_kitsocial_delete_confirm(inputs)
	if (locale === "pt") return pt_kitsocial_delete_confirm(inputs)
	if (locale === "ru") return ru_kitsocial_delete_confirm(inputs)
	if (locale === "sv") return sv_kitsocial_delete_confirm(inputs)
	if (locale === "tr") return tr_kitsocial_delete_confirm(inputs)
	if (locale === "zh") return zh_kitsocial_delete_confirm(inputs)
	if (locale === "ja") return ja_kitsocial_delete_confirm(inputs)
	return en_kitsocial_delete_confirm(inputs)
});
