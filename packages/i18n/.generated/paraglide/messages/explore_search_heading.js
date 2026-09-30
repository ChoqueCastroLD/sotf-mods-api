/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_HeadingInputs */

const en_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search the island`)
};

const es_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca en la isla`)
};

const de_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Insel durchsuchen`)
};

const fr_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fouiller l’île`)
};

const it_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca sull’isola`)
};

const nl_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorzoek het eiland`)
};

const pl_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeszukaj wyspę`)
};

const pt_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquise na ilha`)
};

const ru_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по острову`)
};

const sv_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på ön`)
};

const tr_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adada ara`)
};

const zh_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索全岛`)
};

const ja_explore_search_heading = /** @type {(inputs: Explore_Search_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島を検索`)
};

/**
* | output |
* | --- |
* | "Search the island" |
*
* @param {Explore_Search_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_heading = /** @type {((inputs?: Explore_Search_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_heading(inputs)
	if (locale === "de") return de_explore_search_heading(inputs)
	if (locale === "fr") return fr_explore_search_heading(inputs)
	if (locale === "it") return it_explore_search_heading(inputs)
	if (locale === "nl") return nl_explore_search_heading(inputs)
	if (locale === "pl") return pl_explore_search_heading(inputs)
	if (locale === "pt") return pt_explore_search_heading(inputs)
	if (locale === "ru") return ru_explore_search_heading(inputs)
	if (locale === "sv") return sv_explore_search_heading(inputs)
	if (locale === "tr") return tr_explore_search_heading(inputs)
	if (locale === "zh") return zh_explore_search_heading(inputs)
	if (locale === "ja") return ja_explore_search_heading(inputs)
	return en_explore_search_heading(inputs)
});
