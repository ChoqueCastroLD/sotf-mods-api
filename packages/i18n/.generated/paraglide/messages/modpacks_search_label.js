/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Search_LabelInputs */

const en_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search modpacks`)
};

const es_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar modpacks`)
};

const de_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks durchsuchen`)
};

const fr_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des modpacks`)
};

const it_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca modpack`)
};

const nl_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modpacks zoeken`)
};

const pl_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modpacków`)
};

const pt_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisar modpacks`)
};

const ru_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск модпаков`)
};

const sv_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök modpaket`)
};

const tr_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod paketlerinde ara`)
};

const zh_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索整合包`)
};

const ja_modpacks_search_label = /** @type {(inputs: Modpacks_Search_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modパックを検索`)
};

/**
* | output |
* | --- |
* | "Search modpacks" |
*
* @param {Modpacks_Search_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_search_label = /** @type {((inputs?: Modpacks_Search_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Search_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_search_label(inputs)
	if (locale === "de") return de_modpacks_search_label(inputs)
	if (locale === "fr") return fr_modpacks_search_label(inputs)
	if (locale === "it") return it_modpacks_search_label(inputs)
	if (locale === "nl") return nl_modpacks_search_label(inputs)
	if (locale === "pl") return pl_modpacks_search_label(inputs)
	if (locale === "pt") return pt_modpacks_search_label(inputs)
	if (locale === "ru") return ru_modpacks_search_label(inputs)
	if (locale === "sv") return sv_modpacks_search_label(inputs)
	if (locale === "tr") return tr_modpacks_search_label(inputs)
	if (locale === "zh") return zh_modpacks_search_label(inputs)
	if (locale === "ja") return ja_modpacks_search_label(inputs)
	return en_modpacks_search_label(inputs)
});
