/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Sort_EntriesInputs */

const en_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most entries`)
};

const es_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más participaciones`)
};

const de_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Beiträge`)
};

const fr_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus de participations`)
};

const it_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più partecipazioni`)
};

const nl_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste inzendingen`)
};

const pl_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwięcej zgłoszeń`)
};

const pt_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais inscrições`)
};

const ru_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше работ`)
};

const sv_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest bidrag`)
};

const tr_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok katılım`)
};

const zh_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参赛作品最多`)
};

const ja_jams_admin_sort_entries = /** @type {(inputs: Jams_Admin_Sort_EntriesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参加作品が多い順`)
};

/**
* | output |
* | --- |
* | "Most entries" |
*
* @param {Jams_Admin_Sort_EntriesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_sort_entries = /** @type {((inputs?: Jams_Admin_Sort_EntriesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Sort_EntriesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_sort_entries(inputs)
	if (locale === "de") return de_jams_admin_sort_entries(inputs)
	if (locale === "fr") return fr_jams_admin_sort_entries(inputs)
	if (locale === "it") return it_jams_admin_sort_entries(inputs)
	if (locale === "nl") return nl_jams_admin_sort_entries(inputs)
	if (locale === "pl") return pl_jams_admin_sort_entries(inputs)
	if (locale === "pt") return pt_jams_admin_sort_entries(inputs)
	if (locale === "ru") return ru_jams_admin_sort_entries(inputs)
	if (locale === "sv") return sv_jams_admin_sort_entries(inputs)
	if (locale === "tr") return tr_jams_admin_sort_entries(inputs)
	if (locale === "zh") return zh_jams_admin_sort_entries(inputs)
	if (locale === "ja") return ja_jams_admin_sort_entries(inputs)
	return en_jams_admin_sort_entries(inputs)
});
