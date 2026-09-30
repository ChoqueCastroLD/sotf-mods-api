/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Sort_LabelInputs */

const en_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort by`)
};

const es_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const de_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren nach`)
};

const fr_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier par`)
};

const it_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina per`)
};

const nl_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren op`)
};

const pl_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj według`)
};

const pt_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const ru_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировать по`)
};

const sv_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera efter`)
};

const tr_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırala`)
};

const zh_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序方式`)
};

const ja_basecamp_mods_sort_label = /** @type {(inputs: Basecamp_Mods_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort by" |
*
* @param {Basecamp_Mods_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_sort_label = /** @type {((inputs?: Basecamp_Mods_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_sort_label(inputs)
	if (locale === "de") return de_basecamp_mods_sort_label(inputs)
	if (locale === "fr") return fr_basecamp_mods_sort_label(inputs)
	if (locale === "it") return it_basecamp_mods_sort_label(inputs)
	if (locale === "nl") return nl_basecamp_mods_sort_label(inputs)
	if (locale === "pl") return pl_basecamp_mods_sort_label(inputs)
	if (locale === "pt") return pt_basecamp_mods_sort_label(inputs)
	if (locale === "ru") return ru_basecamp_mods_sort_label(inputs)
	if (locale === "sv") return sv_basecamp_mods_sort_label(inputs)
	if (locale === "tr") return tr_basecamp_mods_sort_label(inputs)
	if (locale === "zh") return zh_basecamp_mods_sort_label(inputs)
	if (locale === "ja") return ja_basecamp_mods_sort_label(inputs)
	return en_basecamp_mods_sort_label(inputs)
});
