/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Sort_LabelInputs */

const en_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort by`)
};

const es_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const de_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren nach`)
};

const fr_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier par`)
};

const it_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina per`)
};

const nl_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren op`)
};

const pl_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj według`)
};

const pt_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar por`)
};

const ru_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка`)
};

const sv_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera efter`)
};

const tr_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıralama`)
};

const zh_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序方式`)
};

const ja_me_sort_label = /** @type {(inputs: Me_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort by" |
*
* @param {Me_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_sort_label = /** @type {((inputs?: Me_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_sort_label(inputs)
	if (locale === "de") return de_me_sort_label(inputs)
	if (locale === "fr") return fr_me_sort_label(inputs)
	if (locale === "it") return it_me_sort_label(inputs)
	if (locale === "nl") return nl_me_sort_label(inputs)
	if (locale === "pl") return pl_me_sort_label(inputs)
	if (locale === "pt") return pt_me_sort_label(inputs)
	if (locale === "ru") return ru_me_sort_label(inputs)
	if (locale === "sv") return sv_me_sort_label(inputs)
	if (locale === "tr") return tr_me_sort_label(inputs)
	if (locale === "zh") return zh_me_sort_label(inputs)
	if (locale === "ja") return ja_me_sort_label(inputs)
	return en_me_sort_label(inputs)
});
