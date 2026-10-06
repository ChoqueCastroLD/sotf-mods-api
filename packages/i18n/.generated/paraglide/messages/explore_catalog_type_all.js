/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Type_AllInputs */

const en_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All types`)
};

const es_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los tipos`)
};

const de_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Typen`)
};

const fr_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les types`)
};

const it_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti i tipi`)
};

const nl_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle typen`)
};

const pl_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie typy`)
};

const pt_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os tipos`)
};

const ru_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все типы`)
};

const sv_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla typer`)
};

const tr_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm türler`)
};

const zh_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有类型`)
};

const ja_explore_catalog_type_all = /** @type {(inputs: Explore_Catalog_Type_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての種類`)
};

/**
* | output |
* | --- |
* | "All types" |
*
* @param {Explore_Catalog_Type_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_type_all = /** @type {((inputs?: Explore_Catalog_Type_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Type_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_type_all(inputs)
	if (locale === "de") return de_explore_catalog_type_all(inputs)
	if (locale === "fr") return fr_explore_catalog_type_all(inputs)
	if (locale === "it") return it_explore_catalog_type_all(inputs)
	if (locale === "nl") return nl_explore_catalog_type_all(inputs)
	if (locale === "pl") return pl_explore_catalog_type_all(inputs)
	if (locale === "pt") return pt_explore_catalog_type_all(inputs)
	if (locale === "ru") return ru_explore_catalog_type_all(inputs)
	if (locale === "sv") return sv_explore_catalog_type_all(inputs)
	if (locale === "tr") return tr_explore_catalog_type_all(inputs)
	if (locale === "zh") return zh_explore_catalog_type_all(inputs)
	if (locale === "ja") return ja_explore_catalog_type_all(inputs)
	return en_explore_catalog_type_all(inputs)
});
