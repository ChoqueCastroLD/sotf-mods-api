/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Max_EntriesInputs */

const en_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries per person`)
};

const es_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participaciones por persona`)
};

const de_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge pro Person`)
};

const fr_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations par personne`)
};

const it_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni per persona`)
};

const nl_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen per persoon`)
};

const pl_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszeń na osobę`)
};

const pt_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições por pessoa`)
};

const ru_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работ на человека`)
};

const sv_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag per person`)
};

const tr_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kişi başına başvuru`)
};

const zh_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每人作品数`)
};

const ja_jams_editor_max_entries = /** @type {(inputs: Jams_Editor_Max_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1人あたりの応募数`)
};

/**
* | output |
* | --- |
* | "Entries per person" |
*
* @param {Jams_Editor_Max_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_max_entries = /** @type {((inputs?: Jams_Editor_Max_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Max_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_max_entries(inputs)
	if (locale === "de") return de_jams_editor_max_entries(inputs)
	if (locale === "fr") return fr_jams_editor_max_entries(inputs)
	if (locale === "it") return it_jams_editor_max_entries(inputs)
	if (locale === "nl") return nl_jams_editor_max_entries(inputs)
	if (locale === "pl") return pl_jams_editor_max_entries(inputs)
	if (locale === "pt") return pt_jams_editor_max_entries(inputs)
	if (locale === "ru") return ru_jams_editor_max_entries(inputs)
	if (locale === "sv") return sv_jams_editor_max_entries(inputs)
	if (locale === "tr") return tr_jams_editor_max_entries(inputs)
	if (locale === "zh") return zh_jams_editor_max_entries(inputs)
	if (locale === "ja") return ja_jams_editor_max_entries(inputs)
	return en_jams_editor_max_entries(inputs)
});
