/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Sort_UpdatedInputs */

const en_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently updated`)
};

const es_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizados hace poco`)
};

const de_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kürzlich aktualisiert`)
};

const fr_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour récemment`)
};

const it_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornate di recente`)
};

const nl_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onlangs bijgewerkt`)
};

const pl_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio aktualizowane`)
};

const pt_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizados recentemente`)
};

const ru_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно обновлённые`)
};

const sv_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyligen uppdaterade`)
};

const tr_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni güncellenen`)
};

const zh_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近更新`)
};

const ja_explore_sort_updated = /** @type {(inputs: Explore_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近の更新順`)
};

/**
* | output |
* | --- |
* | "Recently updated" |
*
* @param {Explore_Sort_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_sort_updated = /** @type {((inputs?: Explore_Sort_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Sort_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_sort_updated(inputs)
	if (locale === "de") return de_explore_sort_updated(inputs)
	if (locale === "fr") return fr_explore_sort_updated(inputs)
	if (locale === "it") return it_explore_sort_updated(inputs)
	if (locale === "nl") return nl_explore_sort_updated(inputs)
	if (locale === "pl") return pl_explore_sort_updated(inputs)
	if (locale === "pt") return pt_explore_sort_updated(inputs)
	if (locale === "ru") return ru_explore_sort_updated(inputs)
	if (locale === "sv") return sv_explore_sort_updated(inputs)
	if (locale === "tr") return tr_explore_sort_updated(inputs)
	if (locale === "zh") return zh_explore_sort_updated(inputs)
	if (locale === "ja") return ja_explore_sort_updated(inputs)
	return en_explore_sort_updated(inputs)
});
