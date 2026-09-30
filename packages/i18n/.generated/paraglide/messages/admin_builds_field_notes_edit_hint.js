/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Builds_Field_Notes_Edit_HintInputs */

const en_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Leave empty to keep the current notes.`)
};

const es_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Déjalo vacío para conservar las notas actuales.`)
};

const de_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Leer lassen, um die aktuellen Notizen zu behalten.`)
};

const fr_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Laissez vide pour conserver les notes actuelles.`)
};

const it_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Lascia vuoto per mantenere le note attuali.`)
};

const nl_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Laat leeg om de huidige notities te houden.`)
};

const pl_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Zostaw puste, aby zachować obecne notatki.`)
};

const pt_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Deixe vazio para manter as notas atuais.`)
};

const ru_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Оставьте пустым, чтобы сохранить текущие заметки.`)
};

const sv_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Lämna tomt för att behålla nuvarande anteckningar.`)
};

const tr_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown. Mevcut notları korumak için boş bırak.`)
};

const zh_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown。留空则保留当前说明。`)
};

const ja_admin_builds_field_notes_edit_hint = /** @type {(inputs: Admin_Builds_Field_Notes_Edit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markdown。空欄のままにすると現在のメモを残します。`)
};

/**
* | output |
* | --- |
* | "Markdown. Leave empty to keep the current notes." |
*
* @param {Admin_Builds_Field_Notes_Edit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_builds_field_notes_edit_hint = /** @type {((inputs?: Admin_Builds_Field_Notes_Edit_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Builds_Field_Notes_Edit_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "de") return de_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "fr") return fr_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "it") return it_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "nl") return nl_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "pl") return pl_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "pt") return pt_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "ru") return ru_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "sv") return sv_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "tr") return tr_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "zh") return zh_admin_builds_field_notes_edit_hint(inputs)
	if (locale === "ja") return ja_admin_builds_field_notes_edit_hint(inputs)
	return en_admin_builds_field_notes_edit_hint(inputs)
});
