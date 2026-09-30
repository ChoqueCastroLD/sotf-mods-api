/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Col_EntriesInputs */

const en_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entries`)
};

const es_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participaciones`)
};

const de_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beiträge`)
};

const fr_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participations`)
};

const it_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizioni`)
};

const nl_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzendingen`)
};

const pl_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia`)
};

const pt_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrições`)
};

const ru_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работы`)
};

const sv_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidrag`)
};

const tr_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvurular`)
};

const zh_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品`)
};

const ja_jams_admin_col_entries = /** @type {(inputs: Jams_Admin_Col_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品数`)
};

/**
* | output |
* | --- |
* | "Entries" |
*
* @param {Jams_Admin_Col_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_col_entries = /** @type {((inputs?: Jams_Admin_Col_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Col_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_col_entries(inputs)
	if (locale === "de") return de_jams_admin_col_entries(inputs)
	if (locale === "fr") return fr_jams_admin_col_entries(inputs)
	if (locale === "it") return it_jams_admin_col_entries(inputs)
	if (locale === "nl") return nl_jams_admin_col_entries(inputs)
	if (locale === "pl") return pl_jams_admin_col_entries(inputs)
	if (locale === "pt") return pt_jams_admin_col_entries(inputs)
	if (locale === "ru") return ru_jams_admin_col_entries(inputs)
	if (locale === "sv") return sv_jams_admin_col_entries(inputs)
	if (locale === "tr") return tr_jams_admin_col_entries(inputs)
	if (locale === "zh") return zh_jams_admin_col_entries(inputs)
	if (locale === "ja") return ja_jams_admin_col_entries(inputs)
	return en_jams_admin_col_entries(inputs)
});
