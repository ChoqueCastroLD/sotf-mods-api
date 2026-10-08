/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Col_QueueInputs */

const en_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Queue`)
};

const es_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cola`)
};

const de_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Warteschlange`)
};

const fr_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`File`)
};

const it_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coda`)
};

const nl_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtrij`)
};

const pl_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejka`)
};

const pt_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fila`)
};

const ru_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очередь`)
};

const sv_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kö`)
};

const tr_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kuyruk`)
};

const zh_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`队列`)
};

const ja_admin_ops_dl_col_queue = /** @type {(inputs: Admin_Ops_Dl_Col_QueueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キュー`)
};

/**
* | output |
* | --- |
* | "Queue" |
*
* @param {Admin_Ops_Dl_Col_QueueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_col_queue = /** @type {((inputs?: Admin_Ops_Dl_Col_QueueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Col_QueueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_col_queue(inputs)
	if (locale === "de") return de_admin_ops_dl_col_queue(inputs)
	if (locale === "fr") return fr_admin_ops_dl_col_queue(inputs)
	if (locale === "it") return it_admin_ops_dl_col_queue(inputs)
	if (locale === "nl") return nl_admin_ops_dl_col_queue(inputs)
	if (locale === "pl") return pl_admin_ops_dl_col_queue(inputs)
	if (locale === "pt") return pt_admin_ops_dl_col_queue(inputs)
	if (locale === "ru") return ru_admin_ops_dl_col_queue(inputs)
	if (locale === "sv") return sv_admin_ops_dl_col_queue(inputs)
	if (locale === "tr") return tr_admin_ops_dl_col_queue(inputs)
	if (locale === "zh") return zh_admin_ops_dl_col_queue(inputs)
	if (locale === "ja") return ja_admin_ops_dl_col_queue(inputs)
	return en_admin_ops_dl_col_queue(inputs)
});
