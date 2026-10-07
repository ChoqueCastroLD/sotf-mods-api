/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Sort_RecentInputs */

const en_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently edited`)
};

const es_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editados hace poco`)
};

const de_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt bearbeitet`)
};

const fr_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifiés récemment`)
};

const it_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modificati di recente`)
};

const nl_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent bewerkt`)
};

const pl_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio edytowane`)
};

const pt_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editadas recentemente`)
};

const ru_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно изменённые`)
};

const sv_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senast redigerade`)
};

const tr_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son düzenlenenler`)
};

const zh_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近编辑`)
};

const ja_jams_admin_sort_recent = /** @type {(inputs: Jams_Admin_Sort_RecentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近編集した順`)
};

/**
* | output |
* | --- |
* | "Recently edited" |
*
* @param {Jams_Admin_Sort_RecentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_sort_recent = /** @type {((inputs?: Jams_Admin_Sort_RecentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Sort_RecentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_sort_recent(inputs)
	if (locale === "de") return de_jams_admin_sort_recent(inputs)
	if (locale === "fr") return fr_jams_admin_sort_recent(inputs)
	if (locale === "it") return it_jams_admin_sort_recent(inputs)
	if (locale === "nl") return nl_jams_admin_sort_recent(inputs)
	if (locale === "pl") return pl_jams_admin_sort_recent(inputs)
	if (locale === "pt") return pt_jams_admin_sort_recent(inputs)
	if (locale === "ru") return ru_jams_admin_sort_recent(inputs)
	if (locale === "sv") return sv_jams_admin_sort_recent(inputs)
	if (locale === "tr") return tr_jams_admin_sort_recent(inputs)
	if (locale === "zh") return zh_jams_admin_sort_recent(inputs)
	if (locale === "ja") return ja_jams_admin_sort_recent(inputs)
	return en_jams_admin_sort_recent(inputs)
});
