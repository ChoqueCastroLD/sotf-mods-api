/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Search_PlaceholderInputs */

const en_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name of the mod`)
};

const es_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del mod`)
};

const de_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name des Mods`)
};

const fr_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du mod`)
};

const it_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome della mod`)
};

const nl_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam van de mod`)
};

const pl_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa moda`)
};

const pt_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do mod`)
};

const ru_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название мода`)
};

const sv_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddens namn`)
};

const tr_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modun adı`)
};

const zh_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组名称`)
};

const ja_basecamp_mods_search_placeholder = /** @type {(inputs: Basecamp_Mods_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD の名前`)
};

/**
* | output |
* | --- |
* | "Name of the mod" |
*
* @param {Basecamp_Mods_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_search_placeholder = /** @type {((inputs?: Basecamp_Mods_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_search_placeholder(inputs)
	if (locale === "de") return de_basecamp_mods_search_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_mods_search_placeholder(inputs)
	if (locale === "it") return it_basecamp_mods_search_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_mods_search_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_mods_search_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_mods_search_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_mods_search_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_mods_search_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_mods_search_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_mods_search_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_mods_search_placeholder(inputs)
	return en_basecamp_mods_search_placeholder(inputs)
});
