/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_NotesInputs */

const en_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes`)
};

const es_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas`)
};

const de_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notizen`)
};

const fr_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes`)
};

const it_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note`)
};

const nl_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notities`)
};

const pl_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatki`)
};

const pt_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas`)
};

const ru_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметки`)
};

const sv_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckningar`)
};

const tr_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notlar`)
};

const zh_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`说明`)
};

const ja_admin_builds_field_notes = /** @type {(inputs: Admin_Builds_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ`)
};

/**
* | output |
* | --- |
* | "Notes" |
*
* @param {Admin_Builds_Field_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_notes = /** @type {((inputs?: Admin_Builds_Field_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_notes(inputs)
	if (locale === "de") return de_admin_builds_field_notes(inputs)
	if (locale === "fr") return fr_admin_builds_field_notes(inputs)
	if (locale === "it") return it_admin_builds_field_notes(inputs)
	if (locale === "nl") return nl_admin_builds_field_notes(inputs)
	if (locale === "pl") return pl_admin_builds_field_notes(inputs)
	if (locale === "pt") return pt_admin_builds_field_notes(inputs)
	if (locale === "ru") return ru_admin_builds_field_notes(inputs)
	if (locale === "sv") return sv_admin_builds_field_notes(inputs)
	if (locale === "tr") return tr_admin_builds_field_notes(inputs)
	if (locale === "zh") return zh_admin_builds_field_notes(inputs)
	if (locale === "ja") return ja_admin_builds_field_notes(inputs)
	return en_admin_builds_field_notes(inputs)
});
