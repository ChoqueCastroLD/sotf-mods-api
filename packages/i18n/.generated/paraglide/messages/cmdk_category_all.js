/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Category_AllInputs */

const en_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const de_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes`)
};

const it_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte`)
};

const nl_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const pl_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie`)
};

const pt_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas`)
};

const ru_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все`)
};

const sv_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla`)
};

const tr_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_cmdk_category_all = /** @type {(inputs: Cmdk_Category_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Cmdk_Category_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_category_all = /** @type {((inputs?: Cmdk_Category_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Category_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_category_all(inputs)
	if (locale === "de") return de_cmdk_category_all(inputs)
	if (locale === "fr") return fr_cmdk_category_all(inputs)
	if (locale === "it") return it_cmdk_category_all(inputs)
	if (locale === "nl") return nl_cmdk_category_all(inputs)
	if (locale === "pl") return pl_cmdk_category_all(inputs)
	if (locale === "pt") return pt_cmdk_category_all(inputs)
	if (locale === "ru") return ru_cmdk_category_all(inputs)
	if (locale === "sv") return sv_cmdk_category_all(inputs)
	if (locale === "tr") return tr_cmdk_category_all(inputs)
	if (locale === "zh") return zh_cmdk_category_all(inputs)
	if (locale === "ja") return ja_cmdk_category_all(inputs)
	return en_cmdk_category_all(inputs)
});
