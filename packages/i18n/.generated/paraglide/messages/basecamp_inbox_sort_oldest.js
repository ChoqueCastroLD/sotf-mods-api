/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Sort_OldestInputs */

const en_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oldest first`)
};

const es_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más antiguos primero`)
};

const de_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Älteste zuerst`)
};

const fr_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus anciens d'abord`)
};

const it_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima i più vecchi`)
};

const nl_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oudste eerst`)
};

const pl_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najstarsze najpierw`)
};

const pt_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais antigos primeiro`)
};

const ru_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала старые`)
};

const sv_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Äldst först`)
};

const tr_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce en eski`)
};

const zh_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最早优先`)
};

const ja_basecamp_inbox_sort_oldest = /** @type {(inputs: Basecamp_Inbox_Sort_OldestInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`古い順`)
};

/**
* | output |
* | --- |
* | "Oldest first" |
*
* @param {Basecamp_Inbox_Sort_OldestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_sort_oldest = /** @type {((inputs?: Basecamp_Inbox_Sort_OldestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Sort_OldestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_sort_oldest(inputs)
	if (locale === "de") return de_basecamp_inbox_sort_oldest(inputs)
	if (locale === "fr") return fr_basecamp_inbox_sort_oldest(inputs)
	if (locale === "it") return it_basecamp_inbox_sort_oldest(inputs)
	if (locale === "nl") return nl_basecamp_inbox_sort_oldest(inputs)
	if (locale === "pl") return pl_basecamp_inbox_sort_oldest(inputs)
	if (locale === "pt") return pt_basecamp_inbox_sort_oldest(inputs)
	if (locale === "ru") return ru_basecamp_inbox_sort_oldest(inputs)
	if (locale === "sv") return sv_basecamp_inbox_sort_oldest(inputs)
	if (locale === "tr") return tr_basecamp_inbox_sort_oldest(inputs)
	if (locale === "zh") return zh_basecamp_inbox_sort_oldest(inputs)
	if (locale === "ja") return ja_basecamp_inbox_sort_oldest(inputs)
	return en_basecamp_inbox_sort_oldest(inputs)
});
