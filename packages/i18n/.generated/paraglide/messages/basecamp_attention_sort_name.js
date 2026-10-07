/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_Sort_NameInputs */

const en_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod name`)
};

const es_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del mod`)
};

const de_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Name`)
};

const fr_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du mod`)
};

const it_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome del mod`)
};

const nl_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam van de mod`)
};

const pl_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa moda`)
};

const pt_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do mod`)
};

const ru_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название мода`)
};

const sv_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddens namn`)
};

const tr_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod adı`)
};

const zh_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组名称`)
};

const ja_basecamp_attention_sort_name = /** @type {(inputs: Basecamp_Attention_Sort_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD 名`)
};

/**
* | output |
* | --- |
* | "Mod name" |
*
* @param {Basecamp_Attention_Sort_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_sort_name = /** @type {((inputs?: Basecamp_Attention_Sort_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_Sort_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_sort_name(inputs)
	if (locale === "de") return de_basecamp_attention_sort_name(inputs)
	if (locale === "fr") return fr_basecamp_attention_sort_name(inputs)
	if (locale === "it") return it_basecamp_attention_sort_name(inputs)
	if (locale === "nl") return nl_basecamp_attention_sort_name(inputs)
	if (locale === "pl") return pl_basecamp_attention_sort_name(inputs)
	if (locale === "pt") return pt_basecamp_attention_sort_name(inputs)
	if (locale === "ru") return ru_basecamp_attention_sort_name(inputs)
	if (locale === "sv") return sv_basecamp_attention_sort_name(inputs)
	if (locale === "tr") return tr_basecamp_attention_sort_name(inputs)
	if (locale === "zh") return zh_basecamp_attention_sort_name(inputs)
	if (locale === "ja") return ja_basecamp_attention_sort_name(inputs)
	return en_basecamp_attention_sort_name(inputs)
});
