/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Readout_Build_CategoryInputs */

const en_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build category`)
};

const es_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría de builds`)
};

const de_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build-Kategorie`)
};

const fr_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie de builds`)
};

const it_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria di build`)
};

const nl_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buildcategorie`)
};

const pl_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria buildów`)
};

const pt_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria de builds`)
};

const ru_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория построек`)
};

const sv_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggkategori`)
};

const tr_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapı kategorisi`)
};

const zh_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建筑分类`)
};

const ja_explore_readout_build_category = /** @type {(inputs: Explore_Readout_Build_CategoryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`建築カテゴリ`)
};

/**
* | output |
* | --- |
* | "Build category" |
*
* @param {Explore_Readout_Build_CategoryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_readout_build_category = /** @type {((inputs?: Explore_Readout_Build_CategoryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Readout_Build_CategoryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_readout_build_category(inputs)
	if (locale === "de") return de_explore_readout_build_category(inputs)
	if (locale === "fr") return fr_explore_readout_build_category(inputs)
	if (locale === "it") return it_explore_readout_build_category(inputs)
	if (locale === "nl") return nl_explore_readout_build_category(inputs)
	if (locale === "pl") return pl_explore_readout_build_category(inputs)
	if (locale === "pt") return pt_explore_readout_build_category(inputs)
	if (locale === "ru") return ru_explore_readout_build_category(inputs)
	if (locale === "sv") return sv_explore_readout_build_category(inputs)
	if (locale === "tr") return tr_explore_readout_build_category(inputs)
	if (locale === "zh") return zh_explore_readout_build_category(inputs)
	if (locale === "ja") return ja_explore_readout_build_category(inputs)
	return en_explore_readout_build_category(inputs)
});
