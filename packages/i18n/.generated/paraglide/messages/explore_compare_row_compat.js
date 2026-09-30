/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Compare_Row_CompatInputs */

const en_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność`)
};

const pt_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_explore_compare_row_compat = /** @type {(inputs: Explore_Compare_Row_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Explore_Compare_Row_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_compare_row_compat = /** @type {((inputs?: Explore_Compare_Row_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Compare_Row_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_compare_row_compat(inputs)
	if (locale === "de") return de_explore_compare_row_compat(inputs)
	if (locale === "fr") return fr_explore_compare_row_compat(inputs)
	if (locale === "it") return it_explore_compare_row_compat(inputs)
	if (locale === "nl") return nl_explore_compare_row_compat(inputs)
	if (locale === "pl") return pl_explore_compare_row_compat(inputs)
	if (locale === "pt") return pt_explore_compare_row_compat(inputs)
	if (locale === "ru") return ru_explore_compare_row_compat(inputs)
	if (locale === "sv") return sv_explore_compare_row_compat(inputs)
	if (locale === "tr") return tr_explore_compare_row_compat(inputs)
	if (locale === "zh") return zh_explore_compare_row_compat(inputs)
	if (locale === "ja") return ja_explore_compare_row_compat(inputs)
	return en_explore_compare_row_compat(inputs)
});
