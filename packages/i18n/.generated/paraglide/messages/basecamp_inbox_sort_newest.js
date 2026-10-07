/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Sort_NewestInputs */

const en_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Newest first`)
};

const es_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más recientes primero`)
};

const de_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste zuerst`)
};

const fr_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus récents d'abord`)
};

const it_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima i più recenti`)
};

const nl_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwste eerst`)
};

const pl_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsze najpierw`)
};

const pt_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais recentes primeiro`)
};

const ru_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала новые`)
};

const sv_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyast först`)
};

const tr_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en yeni`)
};

const zh_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新优先`)
};

const ja_basecamp_inbox_sort_newest = /** @type {(inputs: Basecamp_Inbox_Sort_NewestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい順`)
};

/**
* | output |
* | --- |
* | "Newest first" |
*
* @param {Basecamp_Inbox_Sort_NewestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_sort_newest = /** @type {((inputs?: Basecamp_Inbox_Sort_NewestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Sort_NewestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_sort_newest(inputs)
	if (locale === "de") return de_basecamp_inbox_sort_newest(inputs)
	if (locale === "fr") return fr_basecamp_inbox_sort_newest(inputs)
	if (locale === "it") return it_basecamp_inbox_sort_newest(inputs)
	if (locale === "nl") return nl_basecamp_inbox_sort_newest(inputs)
	if (locale === "pl") return pl_basecamp_inbox_sort_newest(inputs)
	if (locale === "pt") return pt_basecamp_inbox_sort_newest(inputs)
	if (locale === "ru") return ru_basecamp_inbox_sort_newest(inputs)
	if (locale === "sv") return sv_basecamp_inbox_sort_newest(inputs)
	if (locale === "tr") return tr_basecamp_inbox_sort_newest(inputs)
	if (locale === "zh") return zh_basecamp_inbox_sort_newest(inputs)
	if (locale === "ja") return ja_basecamp_inbox_sort_newest(inputs)
	return en_basecamp_inbox_sort_newest(inputs)
});
