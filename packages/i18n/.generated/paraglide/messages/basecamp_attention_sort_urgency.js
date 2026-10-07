/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Sort_UrgencyInputs */

const en_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most urgent`)
};

const es_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más urgente`)
};

const de_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dringendste zuerst`)
};

const fr_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus urgents`)
};

const it_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più urgenti`)
};

const nl_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest urgent`)
};

const pl_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpilniejsze`)
};

const pt_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais urgente`)
};

const ru_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала срочные`)
};

const sv_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest brådskande`)
};

const tr_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En acil`)
};

const zh_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最紧急优先`)
};

const ja_basecamp_attention_sort_urgency = /** @type {(inputs: Basecamp_Attention_Sort_UrgencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`緊急度順`)
};

/**
* | output |
* | --- |
* | "Most urgent" |
*
* @param {Basecamp_Attention_Sort_UrgencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_sort_urgency = /** @type {((inputs?: Basecamp_Attention_Sort_UrgencyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Sort_UrgencyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_sort_urgency(inputs)
	if (locale === "de") return de_basecamp_attention_sort_urgency(inputs)
	if (locale === "fr") return fr_basecamp_attention_sort_urgency(inputs)
	if (locale === "it") return it_basecamp_attention_sort_urgency(inputs)
	if (locale === "nl") return nl_basecamp_attention_sort_urgency(inputs)
	if (locale === "pl") return pl_basecamp_attention_sort_urgency(inputs)
	if (locale === "pt") return pt_basecamp_attention_sort_urgency(inputs)
	if (locale === "ru") return ru_basecamp_attention_sort_urgency(inputs)
	if (locale === "sv") return sv_basecamp_attention_sort_urgency(inputs)
	if (locale === "tr") return tr_basecamp_attention_sort_urgency(inputs)
	if (locale === "zh") return zh_basecamp_attention_sort_urgency(inputs)
	if (locale === "ja") return ja_basecamp_attention_sort_urgency(inputs)
	return en_basecamp_attention_sort_urgency(inputs)
});
