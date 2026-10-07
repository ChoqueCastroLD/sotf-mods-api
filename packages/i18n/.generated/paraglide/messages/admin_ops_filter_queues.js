/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Filter_QueuesInputs */

const en_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filter queues`)
};

const es_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar colas`)
};

const de_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warteschlangen filtern`)
};

const fr_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrer les files`)
};

const it_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtra code`)
};

const nl_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtrijen filteren`)
};

const pl_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtruj kolejki`)
};

const pt_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrar filas`)
};

const ru_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Фильтр очередей`)
};

const sv_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filtrera köer`)
};

const tr_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuyrukları filtrele`)
};

const zh_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`筛选队列`)
};

const ja_admin_ops_filter_queues = /** @type {(inputs: Admin_Ops_Filter_QueuesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キューを絞り込む`)
};

/**
* | output |
* | --- |
* | "Filter queues" |
*
* @param {Admin_Ops_Filter_QueuesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_filter_queues = /** @type {((inputs?: Admin_Ops_Filter_QueuesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Filter_QueuesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_filter_queues(inputs)
	if (locale === "de") return de_admin_ops_filter_queues(inputs)
	if (locale === "fr") return fr_admin_ops_filter_queues(inputs)
	if (locale === "it") return it_admin_ops_filter_queues(inputs)
	if (locale === "nl") return nl_admin_ops_filter_queues(inputs)
	if (locale === "pl") return pl_admin_ops_filter_queues(inputs)
	if (locale === "pt") return pt_admin_ops_filter_queues(inputs)
	if (locale === "ru") return ru_admin_ops_filter_queues(inputs)
	if (locale === "sv") return sv_admin_ops_filter_queues(inputs)
	if (locale === "tr") return tr_admin_ops_filter_queues(inputs)
	if (locale === "zh") return zh_admin_ops_filter_queues(inputs)
	if (locale === "ja") return ja_admin_ops_filter_queues(inputs)
	return en_admin_ops_filter_queues(inputs)
});
