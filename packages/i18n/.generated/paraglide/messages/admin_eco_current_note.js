/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Current_NoteInputs */

const en_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Current note`)
};

const es_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota actual`)
};

const de_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktuelle Notiz`)
};

const fr_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note actuelle`)
};

const it_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota attuale`)
};

const nl_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Huidige notitie`)
};

const pl_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obecna notatka`)
};

const pt_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota atual`)
};

const ru_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Текущая заметка`)
};

const sv_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuvarande anteckning`)
};

const tr_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut not`)
};

const zh_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`当前说明`)
};

const ja_admin_eco_current_note = /** @type {(inputs: Admin_Eco_Current_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のメモ`)
};

/**
* | output |
* | --- |
* | "Current note" |
*
* @param {Admin_Eco_Current_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_current_note = /** @type {((inputs?: Admin_Eco_Current_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Current_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_current_note(inputs)
	if (locale === "de") return de_admin_eco_current_note(inputs)
	if (locale === "fr") return fr_admin_eco_current_note(inputs)
	if (locale === "it") return it_admin_eco_current_note(inputs)
	if (locale === "nl") return nl_admin_eco_current_note(inputs)
	if (locale === "pl") return pl_admin_eco_current_note(inputs)
	if (locale === "pt") return pt_admin_eco_current_note(inputs)
	if (locale === "ru") return ru_admin_eco_current_note(inputs)
	if (locale === "sv") return sv_admin_eco_current_note(inputs)
	if (locale === "tr") return tr_admin_eco_current_note(inputs)
	if (locale === "zh") return zh_admin_eco_current_note(inputs)
	if (locale === "ja") return ja_admin_eco_current_note(inputs)
	return en_admin_eco_current_note(inputs)
});
