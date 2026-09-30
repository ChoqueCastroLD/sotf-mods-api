/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Sort_NewInputs */

const en_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New`)
};

const es_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevos`)
};

const de_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neu`)
};

const fr_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux`)
};

const it_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi`)
};

const nl_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw`)
};

const pl_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe`)
};

const pt_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos`)
};

const ru_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые`)
};

const sv_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya`)
};

const tr_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni`)
};

const zh_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新`)
};

const ja_kits_sort_new = /** @type {(inputs: Kits_Sort_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新着`)
};

/**
* | output |
* | --- |
* | "New" |
*
* @param {Kits_Sort_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_sort_new = /** @type {((inputs?: Kits_Sort_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Sort_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_sort_new(inputs)
	if (locale === "de") return de_kits_sort_new(inputs)
	if (locale === "fr") return fr_kits_sort_new(inputs)
	if (locale === "it") return it_kits_sort_new(inputs)
	if (locale === "nl") return nl_kits_sort_new(inputs)
	if (locale === "pl") return pl_kits_sort_new(inputs)
	if (locale === "pt") return pt_kits_sort_new(inputs)
	if (locale === "ru") return ru_kits_sort_new(inputs)
	if (locale === "sv") return sv_kits_sort_new(inputs)
	if (locale === "tr") return tr_kits_sort_new(inputs)
	if (locale === "zh") return zh_kits_sort_new(inputs)
	if (locale === "ja") return ja_kits_sort_new(inputs)
	return en_kits_sort_new(inputs)
});
