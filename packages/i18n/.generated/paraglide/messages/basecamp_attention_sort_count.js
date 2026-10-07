/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Sort_CountInputs */

const en_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most items`)
};

const es_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más elementos`)
};

const de_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meiste Einträge`)
};

const fr_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le plus d'éléments`)
};

const it_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più elementi`)
};

const nl_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meeste items`)
};

const pl_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najwięcej pozycji`)
};

const pt_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais itens`)
};

const ru_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше всего`)
};

const sv_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flest`)
};

const tr_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok öğe`)
};

const zh_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`数量最多`)
};

const ja_basecamp_attention_sort_count = /** @type {(inputs: Basecamp_Attention_Sort_CountInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`件数順`)
};

/**
* | output |
* | --- |
* | "Most items" |
*
* @param {Basecamp_Attention_Sort_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_sort_count = /** @type {((inputs?: Basecamp_Attention_Sort_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Sort_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_sort_count(inputs)
	if (locale === "de") return de_basecamp_attention_sort_count(inputs)
	if (locale === "fr") return fr_basecamp_attention_sort_count(inputs)
	if (locale === "it") return it_basecamp_attention_sort_count(inputs)
	if (locale === "nl") return nl_basecamp_attention_sort_count(inputs)
	if (locale === "pl") return pl_basecamp_attention_sort_count(inputs)
	if (locale === "pt") return pt_basecamp_attention_sort_count(inputs)
	if (locale === "ru") return ru_basecamp_attention_sort_count(inputs)
	if (locale === "sv") return sv_basecamp_attention_sort_count(inputs)
	if (locale === "tr") return tr_basecamp_attention_sort_count(inputs)
	if (locale === "zh") return zh_basecamp_attention_sort_count(inputs)
	if (locale === "ja") return ja_basecamp_attention_sort_count(inputs)
	return en_basecamp_attention_sort_count(inputs)
});
