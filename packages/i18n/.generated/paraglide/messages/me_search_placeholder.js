/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Search_PlaceholderInputs */

const en_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name of the mod`)
};

const es_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nombre del mod`)
};

const de_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Name des Mods`)
};

const fr_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nom du mod`)
};

const it_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome del mod`)
};

const nl_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naam van de mod`)
};

const pl_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa moda`)
};

const pt_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome do mod`)
};

const ru_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Название мода`)
};

const sv_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddens namn`)
};

const tr_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod adı`)
};

const zh_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组名称`)
};

const ja_me_search_placeholder = /** @type {(inputs: Me_Search_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD 名`)
};

/**
* | output |
* | --- |
* | "Name of the mod" |
*
* @param {Me_Search_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_search_placeholder = /** @type {((inputs?: Me_Search_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Search_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_search_placeholder(inputs)
	if (locale === "de") return de_me_search_placeholder(inputs)
	if (locale === "fr") return fr_me_search_placeholder(inputs)
	if (locale === "it") return it_me_search_placeholder(inputs)
	if (locale === "nl") return nl_me_search_placeholder(inputs)
	if (locale === "pl") return pl_me_search_placeholder(inputs)
	if (locale === "pt") return pt_me_search_placeholder(inputs)
	if (locale === "ru") return ru_me_search_placeholder(inputs)
	if (locale === "sv") return sv_me_search_placeholder(inputs)
	if (locale === "tr") return tr_me_search_placeholder(inputs)
	if (locale === "zh") return zh_me_search_placeholder(inputs)
	if (locale === "ja") return ja_me_search_placeholder(inputs)
	return en_me_search_placeholder(inputs)
});
