/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Clear_NoteInputs */

const en_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove note`)
};

const es_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar nota`)
};

const de_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notiz entfernen`)
};

const fr_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer la note`)
};

const it_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi nota`)
};

const nl_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notitie verwijderen`)
};

const pl_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń notatkę`)
};

const pt_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover nota`)
};

const ru_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить заметку`)
};

const sv_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort anteckning`)
};

const tr_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notu kaldır`)
};

const zh_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除说明`)
};

const ja_admin_eco_clear_note = /** @type {(inputs: Admin_Eco_Clear_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモを削除`)
};

/**
* | output |
* | --- |
* | "Remove note" |
*
* @param {Admin_Eco_Clear_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_clear_note = /** @type {((inputs?: Admin_Eco_Clear_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Clear_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_clear_note(inputs)
	if (locale === "de") return de_admin_eco_clear_note(inputs)
	if (locale === "fr") return fr_admin_eco_clear_note(inputs)
	if (locale === "it") return it_admin_eco_clear_note(inputs)
	if (locale === "nl") return nl_admin_eco_clear_note(inputs)
	if (locale === "pl") return pl_admin_eco_clear_note(inputs)
	if (locale === "pt") return pt_admin_eco_clear_note(inputs)
	if (locale === "ru") return ru_admin_eco_clear_note(inputs)
	if (locale === "sv") return sv_admin_eco_clear_note(inputs)
	if (locale === "tr") return tr_admin_eco_clear_note(inputs)
	if (locale === "zh") return zh_admin_eco_clear_note(inputs)
	if (locale === "ja") return ja_admin_eco_clear_note(inputs)
	return en_admin_eco_clear_note(inputs)
});
