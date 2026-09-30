/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_View_ListInputs */

const en_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`List`)
};

const es_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const de_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const fr_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const it_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elenco`)
};

const nl_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lijst`)
};

const pl_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const pt_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const ru_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Список`)
};

const sv_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lista`)
};

const tr_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liste`)
};

const zh_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`列表`)
};

const ja_explore_view_list = /** @type {(inputs: Explore_View_ListInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リスト`)
};

/**
* | output |
* | --- |
* | "List" |
*
* @param {Explore_View_ListInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_view_list = /** @type {((inputs?: Explore_View_ListInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_View_ListInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_view_list(inputs)
	if (locale === "de") return de_explore_view_list(inputs)
	if (locale === "fr") return fr_explore_view_list(inputs)
	if (locale === "it") return it_explore_view_list(inputs)
	if (locale === "nl") return nl_explore_view_list(inputs)
	if (locale === "pl") return pl_explore_view_list(inputs)
	if (locale === "pt") return pt_explore_view_list(inputs)
	if (locale === "ru") return ru_explore_view_list(inputs)
	if (locale === "sv") return sv_explore_view_list(inputs)
	if (locale === "tr") return tr_explore_view_list(inputs)
	if (locale === "zh") return zh_explore_view_list(inputs)
	if (locale === "ja") return ja_explore_view_list(inputs)
	return en_explore_view_list(inputs)
});
