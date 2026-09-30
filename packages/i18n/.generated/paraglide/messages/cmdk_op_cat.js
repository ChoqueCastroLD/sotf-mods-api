/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Op_CatInputs */

const en_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Category`)
};

const es_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría`)
};

const de_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategorie`)
};

const fr_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie`)
};

const it_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const nl_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categorie`)
};

const pl_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria`)
};

const pt_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria`)
};

const ru_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория`)
};

const sv_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const tr_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategori`)
};

const zh_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分类`)
};

const ja_cmdk_op_cat = /** @type {(inputs: Cmdk_Op_CatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カテゴリー`)
};

/**
* | output |
* | --- |
* | "Category" |
*
* @param {Cmdk_Op_CatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_op_cat = /** @type {((inputs?: Cmdk_Op_CatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Op_CatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_op_cat(inputs)
	if (locale === "de") return de_cmdk_op_cat(inputs)
	if (locale === "fr") return fr_cmdk_op_cat(inputs)
	if (locale === "it") return it_cmdk_op_cat(inputs)
	if (locale === "nl") return nl_cmdk_op_cat(inputs)
	if (locale === "pl") return pl_cmdk_op_cat(inputs)
	if (locale === "pt") return pt_cmdk_op_cat(inputs)
	if (locale === "ru") return ru_cmdk_op_cat(inputs)
	if (locale === "sv") return sv_cmdk_op_cat(inputs)
	if (locale === "tr") return tr_cmdk_op_cat(inputs)
	if (locale === "zh") return zh_cmdk_op_cat(inputs)
	if (locale === "ja") return ja_cmdk_op_cat(inputs)
	return en_cmdk_op_cat(inputs)
});
