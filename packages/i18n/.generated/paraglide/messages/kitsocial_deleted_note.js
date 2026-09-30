/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Deleted_NoteInputs */

const en_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This comment was deleted.`)
};

const es_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentario fue eliminado.`)
};

const de_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Kommentar wurde gelöscht.`)
};

const fr_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce commentaire a été supprimé.`)
};

const it_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo commento è stato eliminato.`)
};

const nl_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie is verwijderd.`)
};

const pl_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten komentarz został usunięty.`)
};

const pt_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentário foi excluído.`)
};

const ru_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот комментарий удалён.`)
};

const sv_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här kommentaren har tagits bort.`)
};

const tr_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorum silindi.`)
};

const zh_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此评论已被删除。`)
};

const ja_kitsocial_deleted_note = /** @type {(inputs: Kitsocial_Deleted_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントは削除されました。`)
};

/**
* | output |
* | --- |
* | "This comment was deleted." |
*
* @param {Kitsocial_Deleted_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_deleted_note = /** @type {((inputs?: Kitsocial_Deleted_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Deleted_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_deleted_note(inputs)
	if (locale === "de") return de_kitsocial_deleted_note(inputs)
	if (locale === "fr") return fr_kitsocial_deleted_note(inputs)
	if (locale === "it") return it_kitsocial_deleted_note(inputs)
	if (locale === "nl") return nl_kitsocial_deleted_note(inputs)
	if (locale === "pl") return pl_kitsocial_deleted_note(inputs)
	if (locale === "pt") return pt_kitsocial_deleted_note(inputs)
	if (locale === "ru") return ru_kitsocial_deleted_note(inputs)
	if (locale === "sv") return sv_kitsocial_deleted_note(inputs)
	if (locale === "tr") return tr_kitsocial_deleted_note(inputs)
	if (locale === "zh") return zh_kitsocial_deleted_note(inputs)
	if (locale === "ja") return ja_kitsocial_deleted_note(inputs)
	return en_kitsocial_deleted_note(inputs)
});
