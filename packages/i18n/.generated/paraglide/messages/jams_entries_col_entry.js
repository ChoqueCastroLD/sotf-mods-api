/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Entries_Col_EntryInputs */

const en_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entry`)
};

const es_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participación`)
};

const de_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag`)
};

const fr_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participation`)
};

const it_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizione`)
};

const nl_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending`)
};

const pl_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie`)
};

const pt_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrição`)
};

const ru_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работа`)
};

const sv_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag`)
};

const tr_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru`)
};

const zh_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品`)
};

const ja_jams_entries_col_entry = /** @type {(inputs: Jams_Entries_Col_EntryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品`)
};

/**
* | output |
* | --- |
* | "Entry" |
*
* @param {Jams_Entries_Col_EntryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_entries_col_entry = /** @type {((inputs?: Jams_Entries_Col_EntryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Entries_Col_EntryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_entries_col_entry(inputs)
	if (locale === "de") return de_jams_entries_col_entry(inputs)
	if (locale === "fr") return fr_jams_entries_col_entry(inputs)
	if (locale === "it") return it_jams_entries_col_entry(inputs)
	if (locale === "nl") return nl_jams_entries_col_entry(inputs)
	if (locale === "pl") return pl_jams_entries_col_entry(inputs)
	if (locale === "pt") return pt_jams_entries_col_entry(inputs)
	if (locale === "ru") return ru_jams_entries_col_entry(inputs)
	if (locale === "sv") return sv_jams_entries_col_entry(inputs)
	if (locale === "tr") return tr_jams_entries_col_entry(inputs)
	if (locale === "zh") return zh_jams_entries_col_entry(inputs)
	if (locale === "ja") return ja_jams_entries_col_entry(inputs)
	return en_jams_entries_col_entry(inputs)
});
