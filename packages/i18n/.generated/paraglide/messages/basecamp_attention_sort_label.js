/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Sort_LabelInputs */

const en_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sort`)
};

const es_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar`)
};

const de_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortieren`)
};

const fr_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trier`)
};

const it_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordina`)
};

const nl_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sorteren`)
};

const pl_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortuj`)
};

const pt_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ordenar`)
};

const ru_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сортировка`)
};

const sv_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sortera`)
};

const tr_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sırala`)
};

const zh_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`排序`)
};

const ja_basecamp_attention_sort_label = /** @type {(inputs: Basecamp_Attention_Sort_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`並べ替え`)
};

/**
* | output |
* | --- |
* | "Sort" |
*
* @param {Basecamp_Attention_Sort_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_sort_label = /** @type {((inputs?: Basecamp_Attention_Sort_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Sort_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_sort_label(inputs)
	if (locale === "de") return de_basecamp_attention_sort_label(inputs)
	if (locale === "fr") return fr_basecamp_attention_sort_label(inputs)
	if (locale === "it") return it_basecamp_attention_sort_label(inputs)
	if (locale === "nl") return nl_basecamp_attention_sort_label(inputs)
	if (locale === "pl") return pl_basecamp_attention_sort_label(inputs)
	if (locale === "pt") return pt_basecamp_attention_sort_label(inputs)
	if (locale === "ru") return ru_basecamp_attention_sort_label(inputs)
	if (locale === "sv") return sv_basecamp_attention_sort_label(inputs)
	if (locale === "tr") return tr_basecamp_attention_sort_label(inputs)
	if (locale === "zh") return zh_basecamp_attention_sort_label(inputs)
	if (locale === "ja") return ja_basecamp_attention_sort_label(inputs)
	return en_basecamp_attention_sort_label(inputs)
});
