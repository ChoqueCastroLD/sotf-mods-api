/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Comment_Removed_NoteInputs */

const en_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This comment was removed.`)
};

const es_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentario se eliminó.`)
};

const de_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Kommentar wurde entfernt.`)
};

const fr_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce commentaire a été supprimé.`)
};

const it_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo commento è stato rimosso.`)
};

const nl_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze reactie is verwijderd.`)
};

const pl_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten komentarz został usunięty.`)
};

const pt_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este comentário foi removido.`)
};

const ru_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот комментарий удалён.`)
};

const sv_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här kommentaren har tagits bort.`)
};

const tr_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yorum kaldırıldı.`)
};

const zh_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此评论已被删除。`)
};

const ja_modpacks_comment_removed_note = /** @type {(inputs: Modpacks_Comment_Removed_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このコメントは削除されました。`)
};

/**
* | output |
* | --- |
* | "This comment was removed." |
*
* @param {Modpacks_Comment_Removed_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_comment_removed_note = /** @type {((inputs?: Modpacks_Comment_Removed_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Comment_Removed_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_comment_removed_note(inputs)
	if (locale === "de") return de_modpacks_comment_removed_note(inputs)
	if (locale === "fr") return fr_modpacks_comment_removed_note(inputs)
	if (locale === "it") return it_modpacks_comment_removed_note(inputs)
	if (locale === "nl") return nl_modpacks_comment_removed_note(inputs)
	if (locale === "pl") return pl_modpacks_comment_removed_note(inputs)
	if (locale === "pt") return pt_modpacks_comment_removed_note(inputs)
	if (locale === "ru") return ru_modpacks_comment_removed_note(inputs)
	if (locale === "sv") return sv_modpacks_comment_removed_note(inputs)
	if (locale === "tr") return tr_modpacks_comment_removed_note(inputs)
	if (locale === "zh") return zh_modpacks_comment_removed_note(inputs)
	if (locale === "ja") return ja_modpacks_comment_removed_note(inputs)
	return en_modpacks_comment_removed_note(inputs)
});
