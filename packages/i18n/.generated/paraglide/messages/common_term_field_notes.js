/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Term_Field_NotesInputs */

const en_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Field notes`)
};

const es_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de campo`)
};

const de_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Feldnotizen`)
};

const fr_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes de terrain`)
};

const it_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note sul campo`)
};

const nl_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veldnotities`)
};

const pl_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notatki terenowe`)
};

const pt_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de campo`)
};

const ru_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полевые заметки`)
};

const sv_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fältanteckningar`)
};

const tr_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saha Notları`)
};

const zh_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`野外笔记`)
};

const ja_common_term_field_notes = /** @type {(inputs: Common_Term_Field_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フィールドノート`)
};

/**
* | output |
* | --- |
* | "Field notes" |
*
* @param {Common_Term_Field_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_term_field_notes = /** @type {((inputs?: Common_Term_Field_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Term_Field_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_term_field_notes(inputs)
	if (locale === "de") return de_common_term_field_notes(inputs)
	if (locale === "fr") return fr_common_term_field_notes(inputs)
	if (locale === "it") return it_common_term_field_notes(inputs)
	if (locale === "nl") return nl_common_term_field_notes(inputs)
	if (locale === "pl") return pl_common_term_field_notes(inputs)
	if (locale === "pt") return pt_common_term_field_notes(inputs)
	if (locale === "ru") return ru_common_term_field_notes(inputs)
	if (locale === "sv") return sv_common_term_field_notes(inputs)
	if (locale === "tr") return tr_common_term_field_notes(inputs)
	if (locale === "zh") return zh_common_term_field_notes(inputs)
	if (locale === "ja") return ja_common_term_field_notes(inputs)
	return en_common_term_field_notes(inputs)
});
