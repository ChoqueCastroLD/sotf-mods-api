/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Recent_TitleInputs */

const en_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent searches`)
};

const es_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búsquedas recientes`)
};

const de_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Suchen`)
};

const fr_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherches récentes`)
};

const it_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerche recenti`)
};

const nl_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recente zoekopdrachten`)
};

const pl_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie wyszukiwania`)
};

const pt_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisas recentes`)
};

const ru_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавние запросы`)
};

const sv_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste sökningar`)
};

const tr_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son aramalar`)
};

const zh_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近搜索`)
};

const ja_explore_search_recent_title = /** @type {(inputs: Explore_Search_Recent_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近の検索`)
};

/**
* | output |
* | --- |
* | "Recent searches" |
*
* @param {Explore_Search_Recent_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_recent_title = /** @type {((inputs?: Explore_Search_Recent_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Recent_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_recent_title(inputs)
	if (locale === "de") return de_explore_search_recent_title(inputs)
	if (locale === "fr") return fr_explore_search_recent_title(inputs)
	if (locale === "it") return it_explore_search_recent_title(inputs)
	if (locale === "nl") return nl_explore_search_recent_title(inputs)
	if (locale === "pl") return pl_explore_search_recent_title(inputs)
	if (locale === "pt") return pt_explore_search_recent_title(inputs)
	if (locale === "ru") return ru_explore_search_recent_title(inputs)
	if (locale === "sv") return sv_explore_search_recent_title(inputs)
	if (locale === "tr") return tr_explore_search_recent_title(inputs)
	if (locale === "zh") return zh_explore_search_recent_title(inputs)
	if (locale === "ja") return ja_explore_search_recent_title(inputs)
	return en_explore_search_recent_title(inputs)
});
