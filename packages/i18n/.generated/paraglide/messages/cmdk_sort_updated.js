/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Sort_UpdatedInputs */

const en_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recently updated`)
};

const es_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizados hace poco`)
};

const de_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zuletzt aktualisiert`)
};

const fr_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mis à jour récemment`)
};

const it_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornati di recente`)
};

const nl_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent bijgewerkt`)
};

const pl_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnio zaktualizowane`)
};

const pt_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizados recentemente`)
};

const ru_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавно обновлённые`)
};

const sv_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyligen uppdaterade`)
};

const tr_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yakın zamanda güncellenen`)
};

const zh_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近更新`)
};

const ja_cmdk_sort_updated = /** @type {(inputs: Cmdk_Sort_UpdatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近更新`)
};

/**
* | output |
* | --- |
* | "Recently updated" |
*
* @param {Cmdk_Sort_UpdatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_sort_updated = /** @type {((inputs?: Cmdk_Sort_UpdatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Sort_UpdatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_sort_updated(inputs)
	if (locale === "de") return de_cmdk_sort_updated(inputs)
	if (locale === "fr") return fr_cmdk_sort_updated(inputs)
	if (locale === "it") return it_cmdk_sort_updated(inputs)
	if (locale === "nl") return nl_cmdk_sort_updated(inputs)
	if (locale === "pl") return pl_cmdk_sort_updated(inputs)
	if (locale === "pt") return pt_cmdk_sort_updated(inputs)
	if (locale === "ru") return ru_cmdk_sort_updated(inputs)
	if (locale === "sv") return sv_cmdk_sort_updated(inputs)
	if (locale === "tr") return tr_cmdk_sort_updated(inputs)
	if (locale === "zh") return zh_cmdk_sort_updated(inputs)
	if (locale === "ja") return ja_cmdk_sort_updated(inputs)
	return en_cmdk_sort_updated(inputs)
});
