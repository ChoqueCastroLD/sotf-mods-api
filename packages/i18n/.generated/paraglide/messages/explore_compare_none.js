/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_NoneInputs */

const en_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`None`)
};

const es_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ninguna`)
};

const de_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine`)
};

const fr_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune`)
};

const it_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna`)
};

const nl_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen`)
};

const pl_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak`)
};

const pt_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma`)
};

const ru_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет`)
};

const sv_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga`)
};

const tr_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yok`)
};

const zh_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无`)
};

const ja_explore_compare_none = /** @type {(inputs: Explore_Compare_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`なし`)
};

/**
* | output |
* | --- |
* | "None" |
*
* @param {Explore_Compare_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_none = /** @type {((inputs?: Explore_Compare_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_none(inputs)
	if (locale === "de") return de_explore_compare_none(inputs)
	if (locale === "fr") return fr_explore_compare_none(inputs)
	if (locale === "it") return it_explore_compare_none(inputs)
	if (locale === "nl") return nl_explore_compare_none(inputs)
	if (locale === "pl") return pl_explore_compare_none(inputs)
	if (locale === "pt") return pt_explore_compare_none(inputs)
	if (locale === "ru") return ru_explore_compare_none(inputs)
	if (locale === "sv") return sv_explore_compare_none(inputs)
	if (locale === "tr") return tr_explore_compare_none(inputs)
	if (locale === "zh") return zh_explore_compare_none(inputs)
	if (locale === "ja") return ja_explore_compare_none(inputs)
	return en_explore_compare_none(inputs)
});
