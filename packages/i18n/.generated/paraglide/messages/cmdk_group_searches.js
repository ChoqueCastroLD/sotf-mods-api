/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Group_SearchesInputs */

const en_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recent searches`)
};

const es_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búsquedas recientes`)
};

const de_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Letzte Suchen`)
};

const fr_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recherches récentes`)
};

const it_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ricerche recenti`)
};

const nl_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recente zoekopdrachten`)
};

const pl_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ostatnie wyszukiwania`)
};

const pt_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pesquisas recentes`)
};

const ru_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Недавние запросы`)
};

const sv_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste sökningar`)
};

const tr_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son aramalar`)
};

const zh_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近搜索`)
};

const ja_cmdk_group_searches = /** @type {(inputs: Cmdk_Group_SearchesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近の検索`)
};

/**
* | output |
* | --- |
* | "Recent searches" |
*
* @param {Cmdk_Group_SearchesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_group_searches = /** @type {((inputs?: Cmdk_Group_SearchesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Group_SearchesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_group_searches(inputs)
	if (locale === "de") return de_cmdk_group_searches(inputs)
	if (locale === "fr") return fr_cmdk_group_searches(inputs)
	if (locale === "it") return it_cmdk_group_searches(inputs)
	if (locale === "nl") return nl_cmdk_group_searches(inputs)
	if (locale === "pl") return pl_cmdk_group_searches(inputs)
	if (locale === "pt") return pt_cmdk_group_searches(inputs)
	if (locale === "ru") return ru_cmdk_group_searches(inputs)
	if (locale === "sv") return sv_cmdk_group_searches(inputs)
	if (locale === "tr") return tr_cmdk_group_searches(inputs)
	if (locale === "zh") return zh_cmdk_group_searches(inputs)
	if (locale === "ja") return ja_cmdk_group_searches(inputs)
	return en_cmdk_group_searches(inputs)
});
