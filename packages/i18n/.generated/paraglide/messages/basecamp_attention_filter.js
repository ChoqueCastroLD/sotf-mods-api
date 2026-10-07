/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_FilterInputs */

const en_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter by type`)
};

const es_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar por tipo`)
};

const de_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Typ filtern`)
};

const fr_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer par type`)
};

const it_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra per tipo`)
};

const nl_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter op type`)
};

const pl_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj według typu`)
};

const pt_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar por tipo`)
};

const ru_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр по типу`)
};

const sv_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera efter typ`)
};

const tr_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Türe göre filtrele`)
};

const zh_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按类型筛选`)
};

const ja_basecamp_attention_filter = /** @type {(inputs: Basecamp_Attention_FilterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類で絞り込み`)
};

/**
* | output |
* | --- |
* | "Filter by type" |
*
* @param {Basecamp_Attention_FilterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_filter = /** @type {((inputs?: Basecamp_Attention_FilterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_FilterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_filter(inputs)
	if (locale === "de") return de_basecamp_attention_filter(inputs)
	if (locale === "fr") return fr_basecamp_attention_filter(inputs)
	if (locale === "it") return it_basecamp_attention_filter(inputs)
	if (locale === "nl") return nl_basecamp_attention_filter(inputs)
	if (locale === "pl") return pl_basecamp_attention_filter(inputs)
	if (locale === "pt") return pt_basecamp_attention_filter(inputs)
	if (locale === "ru") return ru_basecamp_attention_filter(inputs)
	if (locale === "sv") return sv_basecamp_attention_filter(inputs)
	if (locale === "tr") return tr_basecamp_attention_filter(inputs)
	if (locale === "zh") return zh_basecamp_attention_filter(inputs)
	if (locale === "ja") return ja_basecamp_attention_filter(inputs)
	return en_basecamp_attention_filter(inputs)
});
