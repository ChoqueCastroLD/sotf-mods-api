/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Catalog_Type_LabelInputs */

const en_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const es_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const de_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const fr_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const it_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const nl_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type`)
};

const pl_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const pt_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo`)
};

const ru_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип`)
};

const sv_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ`)
};

const tr_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tür`)
};

const zh_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`类型`)
};

const ja_explore_catalog_type_label = /** @type {(inputs: Explore_Catalog_Type_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`種類`)
};

/**
* | output |
* | --- |
* | "Type" |
*
* @param {Explore_Catalog_Type_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_catalog_type_label = /** @type {((inputs?: Explore_Catalog_Type_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Catalog_Type_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_catalog_type_label(inputs)
	if (locale === "de") return de_explore_catalog_type_label(inputs)
	if (locale === "fr") return fr_explore_catalog_type_label(inputs)
	if (locale === "it") return it_explore_catalog_type_label(inputs)
	if (locale === "nl") return nl_explore_catalog_type_label(inputs)
	if (locale === "pl") return pl_explore_catalog_type_label(inputs)
	if (locale === "pt") return pt_explore_catalog_type_label(inputs)
	if (locale === "ru") return ru_explore_catalog_type_label(inputs)
	if (locale === "sv") return sv_explore_catalog_type_label(inputs)
	if (locale === "tr") return tr_explore_catalog_type_label(inputs)
	if (locale === "zh") return zh_explore_catalog_type_label(inputs)
	if (locale === "ja") return ja_explore_catalog_type_label(inputs)
	return en_explore_catalog_type_label(inputs)
});
