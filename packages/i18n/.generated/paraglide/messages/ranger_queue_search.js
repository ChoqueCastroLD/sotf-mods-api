/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Queue_SearchInputs */

const en_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search by title`)
};

const es_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por título`)
};

const de_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nach Titel suchen`)
};

const fr_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher par titre`)
};

const it_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca per titolo`)
};

const nl_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoeken op titel`)
};

const pl_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj po tytule`)
};

const pt_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar por título`)
};

const ru_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск по названию`)
};

const sv_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök på titel`)
};

const tr_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlığa göre ara`)
};

const zh_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按标题搜索`)
};

const ja_ranger_queue_search = /** @type {(inputs: Ranger_Queue_SearchInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトルで検索`)
};

/**
* | output |
* | --- |
* | "Search by title" |
*
* @param {Ranger_Queue_SearchInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_queue_search = /** @type {((inputs?: Ranger_Queue_SearchInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Queue_SearchInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_queue_search(inputs)
	if (locale === "de") return de_ranger_queue_search(inputs)
	if (locale === "fr") return fr_ranger_queue_search(inputs)
	if (locale === "it") return it_ranger_queue_search(inputs)
	if (locale === "nl") return nl_ranger_queue_search(inputs)
	if (locale === "pl") return pl_ranger_queue_search(inputs)
	if (locale === "pt") return pt_ranger_queue_search(inputs)
	if (locale === "ru") return ru_ranger_queue_search(inputs)
	if (locale === "sv") return sv_ranger_queue_search(inputs)
	if (locale === "tr") return tr_ranger_queue_search(inputs)
	if (locale === "zh") return zh_ranger_queue_search(inputs)
	if (locale === "ja") return ja_ranger_queue_search(inputs)
	return en_ranger_queue_search(inputs)
});
