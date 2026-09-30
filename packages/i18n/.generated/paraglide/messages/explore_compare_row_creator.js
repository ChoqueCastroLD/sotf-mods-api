/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Row_CreatorInputs */

const en_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creator`)
};

const es_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creador`)
};

const de_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ersteller`)
};

const fr_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créateur`)
};

const it_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Creatore`)
};

const nl_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maker`)
};

const pl_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twórca`)
};

const pt_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criador`)
};

const ru_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Автор`)
};

const sv_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapare`)
};

const tr_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yapımcı`)
};

const zh_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者`)
};

const ja_explore_compare_row_creator = /** @type {(inputs: Explore_Compare_Row_CreatorInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作者`)
};

/**
* | output |
* | --- |
* | "Creator" |
*
* @param {Explore_Compare_Row_CreatorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_row_creator = /** @type {((inputs?: Explore_Compare_Row_CreatorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_CreatorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_row_creator(inputs)
	if (locale === "de") return de_explore_compare_row_creator(inputs)
	if (locale === "fr") return fr_explore_compare_row_creator(inputs)
	if (locale === "it") return it_explore_compare_row_creator(inputs)
	if (locale === "nl") return nl_explore_compare_row_creator(inputs)
	if (locale === "pl") return pl_explore_compare_row_creator(inputs)
	if (locale === "pt") return pt_explore_compare_row_creator(inputs)
	if (locale === "ru") return ru_explore_compare_row_creator(inputs)
	if (locale === "sv") return sv_explore_compare_row_creator(inputs)
	if (locale === "tr") return tr_explore_compare_row_creator(inputs)
	if (locale === "zh") return zh_explore_compare_row_creator(inputs)
	if (locale === "ja") return ja_explore_compare_row_creator(inputs)
	return en_explore_compare_row_creator(inputs)
});
