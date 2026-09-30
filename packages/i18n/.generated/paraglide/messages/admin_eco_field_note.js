/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Field_NoteInputs */

const en_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New note`)
};

const es_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nota nueva`)
};

const de_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Notiz`)
};

const fr_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelle note`)
};

const it_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova nota`)
};

const nl_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe notitie`)
};

const pl_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowa notatka`)
};

const pt_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova nota`)
};

const ru_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новая заметка`)
};

const sv_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny anteckning`)
};

const tr_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni not`)
};

const zh_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新说明`)
};

const ja_admin_eco_field_note = /** @type {(inputs: Admin_Eco_Field_NoteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいメモ`)
};

/**
* | output |
* | --- |
* | "New note" |
*
* @param {Admin_Eco_Field_NoteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_field_note = /** @type {((inputs?: Admin_Eco_Field_NoteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Field_NoteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_field_note(inputs)
	if (locale === "de") return de_admin_eco_field_note(inputs)
	if (locale === "fr") return fr_admin_eco_field_note(inputs)
	if (locale === "it") return it_admin_eco_field_note(inputs)
	if (locale === "nl") return nl_admin_eco_field_note(inputs)
	if (locale === "pl") return pl_admin_eco_field_note(inputs)
	if (locale === "pt") return pt_admin_eco_field_note(inputs)
	if (locale === "ru") return ru_admin_eco_field_note(inputs)
	if (locale === "sv") return sv_admin_eco_field_note(inputs)
	if (locale === "tr") return tr_admin_eco_field_note(inputs)
	if (locale === "zh") return zh_admin_eco_field_note(inputs)
	if (locale === "ja") return ja_admin_eco_field_note(inputs)
	return en_admin_eco_field_note(inputs)
});
