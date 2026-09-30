/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Clear_NotesInputs */

const en_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove the current notes`)
};

const es_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar las notas actuales`)
};

const de_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelle Notizen entfernen`)
};

const fr_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer les notes actuelles`)
};

const it_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi le note attuali`)
};

const nl_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige notities verwijderen`)
};

const pl_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń obecne notatki`)
};

const pt_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover as notas atuais`)
};

const ru_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить текущие заметки`)
};

const sv_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort nuvarande anteckningar`)
};

const tr_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut notları kaldır`)
};

const zh_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除当前说明`)
};

const ja_admin_builds_clear_notes = /** @type {(inputs: Admin_Builds_Clear_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のメモを削除`)
};

/**
* | output |
* | --- |
* | "Remove the current notes" |
*
* @param {Admin_Builds_Clear_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_clear_notes = /** @type {((inputs?: Admin_Builds_Clear_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Clear_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_clear_notes(inputs)
	if (locale === "de") return de_admin_builds_clear_notes(inputs)
	if (locale === "fr") return fr_admin_builds_clear_notes(inputs)
	if (locale === "it") return it_admin_builds_clear_notes(inputs)
	if (locale === "nl") return nl_admin_builds_clear_notes(inputs)
	if (locale === "pl") return pl_admin_builds_clear_notes(inputs)
	if (locale === "pt") return pt_admin_builds_clear_notes(inputs)
	if (locale === "ru") return ru_admin_builds_clear_notes(inputs)
	if (locale === "sv") return sv_admin_builds_clear_notes(inputs)
	if (locale === "tr") return tr_admin_builds_clear_notes(inputs)
	if (locale === "zh") return zh_admin_builds_clear_notes(inputs)
	if (locale === "ja") return ja_admin_builds_clear_notes(inputs)
	return en_admin_builds_clear_notes(inputs)
});
