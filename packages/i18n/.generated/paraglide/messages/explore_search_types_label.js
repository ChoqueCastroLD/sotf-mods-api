/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Types_LabelInputs */

const en_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Result type`)
};

const es_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de resultado`)
};

const de_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ergebnistyp`)
};

const fr_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de résultat`)
};

const it_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di risultato`)
};

const nl_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soort resultaat`)
};

const pl_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rodzaj wyniku`)
};

const pt_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de resultado`)
};

const ru_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип результата`)
};

const sv_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultattyp`)
};

const tr_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuç türü`)
};

const zh_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结果类型`)
};

const ja_explore_search_types_label = /** @type {(inputs: Explore_Search_Types_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果の種類`)
};

/**
* | output |
* | --- |
* | "Result type" |
*
* @param {Explore_Search_Types_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_types_label = /** @type {((inputs?: Explore_Search_Types_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Types_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_types_label(inputs)
	if (locale === "de") return de_explore_search_types_label(inputs)
	if (locale === "fr") return fr_explore_search_types_label(inputs)
	if (locale === "it") return it_explore_search_types_label(inputs)
	if (locale === "nl") return nl_explore_search_types_label(inputs)
	if (locale === "pl") return pl_explore_search_types_label(inputs)
	if (locale === "pt") return pt_explore_search_types_label(inputs)
	if (locale === "ru") return ru_explore_search_types_label(inputs)
	if (locale === "sv") return sv_explore_search_types_label(inputs)
	if (locale === "tr") return tr_explore_search_types_label(inputs)
	if (locale === "zh") return zh_explore_search_types_label(inputs)
	if (locale === "ja") return ja_explore_search_types_label(inputs)
	return en_explore_search_types_label(inputs)
});
