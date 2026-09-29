/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Search_LabelInputs */

const en_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search`)
};

const es_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar`)
};

const de_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suche`)
};

const fr_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher`)
};

const it_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca`)
};

const nl_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken`)
};

const pl_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj`)
};

const pt_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar`)
};

const ru_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск`)
};

const sv_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök`)
};

const tr_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ara`)
};

const zh_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索`)
};

const ja_common_search_label = /** @type {(inputs: Common_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索`)
};

/**
* | output |
* | --- |
* | "Search" |
*
* @param {Common_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_search_label = /** @type {((inputs?: Common_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_search_label(inputs)
	if (locale === "de") return de_common_search_label(inputs)
	if (locale === "fr") return fr_common_search_label(inputs)
	if (locale === "it") return it_common_search_label(inputs)
	if (locale === "nl") return nl_common_search_label(inputs)
	if (locale === "pl") return pl_common_search_label(inputs)
	if (locale === "pt") return pt_common_search_label(inputs)
	if (locale === "ru") return ru_common_search_label(inputs)
	if (locale === "sv") return sv_common_search_label(inputs)
	if (locale === "tr") return tr_common_search_label(inputs)
	if (locale === "zh") return zh_common_search_label(inputs)
	if (locale === "ja") return ja_common_search_label(inputs)
	return en_common_search_label(inputs)
});
