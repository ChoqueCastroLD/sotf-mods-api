/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entry_NotesInputs */

const en_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes from the authors`)
};

const es_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas de los autores`)
};

const de_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmerkungen der Autoren`)
};

const fr_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes des auteurs`)
};

const it_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note degli autori`)
};

const nl_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notities van de makers`)
};

const pl_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwagi autorów`)
};

const pt_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas dos autores`)
};

const ru_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметки авторов`)
};

const sv_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckningar från upphovspersonerna`)
};

const tr_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcıların notları`)
};

const zh_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者备注`)
};

const ja_jams_entry_notes = /** @type {(inputs: Jams_Entry_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者からのメモ`)
};

/**
* | output |
* | --- |
* | "Notes from the authors" |
*
* @param {Jams_Entry_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entry_notes = /** @type {((inputs?: Jams_Entry_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entry_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entry_notes(inputs)
	if (locale === "de") return de_jams_entry_notes(inputs)
	if (locale === "fr") return fr_jams_entry_notes(inputs)
	if (locale === "it") return it_jams_entry_notes(inputs)
	if (locale === "nl") return nl_jams_entry_notes(inputs)
	if (locale === "pl") return pl_jams_entry_notes(inputs)
	if (locale === "pt") return pt_jams_entry_notes(inputs)
	if (locale === "ru") return ru_jams_entry_notes(inputs)
	if (locale === "sv") return sv_jams_entry_notes(inputs)
	if (locale === "tr") return tr_jams_entry_notes(inputs)
	if (locale === "zh") return zh_jams_entry_notes(inputs)
	if (locale === "ja") return ja_jams_entry_notes(inputs)
	return en_jams_entry_notes(inputs)
});
