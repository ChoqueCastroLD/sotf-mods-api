/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_NotesInputs */

const en_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes (optional)`)
};

const es_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas (opcional)`)
};

const de_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmerkungen (optional)`)
};

const fr_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notes (facultatif)`)
};

const it_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Note (facoltativo)`)
};

const nl_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notities (optioneel)`)
};

const pl_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uwagi (opcjonalnie)`)
};

const pt_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notas (opcional)`)
};

const ru_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заметки (необязательно)`)
};

const sv_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anteckningar (valfritt)`)
};

const tr_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Notlar (isteğe bağlı)`)
};

const zh_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`备注（可选）`)
};

const ja_jams_submit_notes = /** @type {(inputs: Jams_Submit_NotesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`メモ（任意）`)
};

/**
* | output |
* | --- |
* | "Notes (optional)" |
*
* @param {Jams_Submit_NotesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_notes = /** @type {((inputs?: Jams_Submit_NotesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_NotesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_notes(inputs)
	if (locale === "de") return de_jams_submit_notes(inputs)
	if (locale === "fr") return fr_jams_submit_notes(inputs)
	if (locale === "it") return it_jams_submit_notes(inputs)
	if (locale === "nl") return nl_jams_submit_notes(inputs)
	if (locale === "pl") return pl_jams_submit_notes(inputs)
	if (locale === "pt") return pt_jams_submit_notes(inputs)
	if (locale === "ru") return ru_jams_submit_notes(inputs)
	if (locale === "sv") return sv_jams_submit_notes(inputs)
	if (locale === "tr") return tr_jams_submit_notes(inputs)
	if (locale === "zh") return zh_jams_submit_notes(inputs)
	if (locale === "ja") return ja_jams_submit_notes(inputs)
	return en_jams_submit_notes(inputs)
});
