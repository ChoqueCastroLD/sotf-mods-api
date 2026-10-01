/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Explore_Search_Recent_RemoveInputs */

const en_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove “${i?.query}” from recent searches`)
};

const es_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar «${i?.query}» de las búsquedas recientes`)
};

const de_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.query}“ aus den letzten Suchen entfernen`)
};

const fr_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer « ${i?.query} » des recherches récentes`)
};

const it_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi «${i?.query}» dalle ricerche recenti`)
};

const nl_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” verwijderen uit recente zoekopdrachten`)
};

const pl_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń „${i?.query}” z ostatnich wyszukiwań`)
};

const pt_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover “${i?.query}” das pesquisas recentes`)
};

const ru_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить «${i?.query}» из недавних запросов`)
};

const sv_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort ”${i?.query}” från senaste sökningar`)
};

const tr_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” aramasını son aramalardan kaldır`)
};

const zh_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`从最近搜索中移除“${i?.query}”`)
};

const ja_explore_search_recent_remove = /** @type {(inputs: Explore_Search_Recent_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」を最近の検索から削除`)
};

/**
* | output |
* | --- |
* | "Remove “{query}” from recent searches" |
*
* @param {Explore_Search_Recent_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_recent_remove = /** @type {((inputs: Explore_Search_Recent_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Recent_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_recent_remove(inputs)
	if (locale === "de") return de_explore_search_recent_remove(inputs)
	if (locale === "fr") return fr_explore_search_recent_remove(inputs)
	if (locale === "it") return it_explore_search_recent_remove(inputs)
	if (locale === "nl") return nl_explore_search_recent_remove(inputs)
	if (locale === "pl") return pl_explore_search_recent_remove(inputs)
	if (locale === "pt") return pt_explore_search_recent_remove(inputs)
	if (locale === "ru") return ru_explore_search_recent_remove(inputs)
	if (locale === "sv") return sv_explore_search_recent_remove(inputs)
	if (locale === "tr") return tr_explore_search_recent_remove(inputs)
	if (locale === "zh") return zh_explore_search_recent_remove(inputs)
	if (locale === "ja") return ja_explore_search_recent_remove(inputs)
	return en_explore_search_recent_remove(inputs)
});
