/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Search_Recent_ClearInputs */

const en_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Clear`)
};

const es_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Effacer`)
};

const it_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancella`)
};

const nl_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wissen`)
};

const pl_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyczyść`)
};

const pt_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Limpar`)
};

const ru_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очистить`)
};

const sv_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rensa`)
};

const tr_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Temizle`)
};

const zh_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`清除`)
};

const ja_explore_search_recent_clear = /** @type {(inputs: Explore_Search_Recent_ClearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`消去`)
};

/**
* | output |
* | --- |
* | "Clear" |
*
* @param {Explore_Search_Recent_ClearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_search_recent_clear = /** @type {((inputs?: Explore_Search_Recent_ClearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Search_Recent_ClearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_search_recent_clear(inputs)
	if (locale === "de") return de_explore_search_recent_clear(inputs)
	if (locale === "fr") return fr_explore_search_recent_clear(inputs)
	if (locale === "it") return it_explore_search_recent_clear(inputs)
	if (locale === "nl") return nl_explore_search_recent_clear(inputs)
	if (locale === "pl") return pl_explore_search_recent_clear(inputs)
	if (locale === "pt") return pt_explore_search_recent_clear(inputs)
	if (locale === "ru") return ru_explore_search_recent_clear(inputs)
	if (locale === "sv") return sv_explore_search_recent_clear(inputs)
	if (locale === "tr") return tr_explore_search_recent_clear(inputs)
	if (locale === "zh") return zh_explore_search_recent_clear(inputs)
	if (locale === "ja") return ja_explore_search_recent_clear(inputs)
	return en_explore_search_recent_clear(inputs)
});
