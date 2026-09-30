/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Sort_LabelInputs */

const en_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort kits`)
};

const es_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar kits`)
};

const de_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits sortieren`)
};

const fr_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier les kits`)
};

const it_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina i kit`)
};

const nl_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kits sorteren`)
};

const pl_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj zestawy`)
};

const pt_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar kits`)
};

const ru_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка наборов`)
};

const sv_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera kit`)
};

const tr_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitleri sırala`)
};

const zh_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`套装排序`)
};

const ja_kits_sort_label = /** @type {(inputs: Kits_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットの並び順`)
};

/**
* | output |
* | --- |
* | "Sort kits" |
*
* @param {Kits_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_sort_label = /** @type {((inputs?: Kits_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_sort_label(inputs)
	if (locale === "de") return de_kits_sort_label(inputs)
	if (locale === "fr") return fr_kits_sort_label(inputs)
	if (locale === "it") return it_kits_sort_label(inputs)
	if (locale === "nl") return nl_kits_sort_label(inputs)
	if (locale === "pl") return pl_kits_sort_label(inputs)
	if (locale === "pt") return pt_kits_sort_label(inputs)
	if (locale === "ru") return ru_kits_sort_label(inputs)
	if (locale === "sv") return sv_kits_sort_label(inputs)
	if (locale === "tr") return tr_kits_sort_label(inputs)
	if (locale === "zh") return zh_kits_sort_label(inputs)
	if (locale === "ja") return ja_kits_sort_label(inputs)
	return en_kits_sort_label(inputs)
});
