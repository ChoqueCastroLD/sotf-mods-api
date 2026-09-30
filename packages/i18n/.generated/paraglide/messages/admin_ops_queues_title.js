/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Queues_TitleInputs */

const en_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job queues`)
};

const es_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Colas de tareas`)
};

const de_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job-Warteschlangen`)
};

const fr_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files de tâches`)
};

const it_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Code dei job`)
};

const nl_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takenwachtrijen`)
};

const pl_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kolejki zadań`)
};

const pt_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filas de tarefas`)
};

const ru_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Очереди задач`)
};

const sv_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobbköer`)
};

const tr_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İş kuyrukları`)
};

const zh_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务队列`)
};

const ja_admin_ops_queues_title = /** @type {(inputs: Admin_Ops_Queues_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブキュー`)
};

/**
* | output |
* | --- |
* | "Job queues" |
*
* @param {Admin_Ops_Queues_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_queues_title = /** @type {((inputs?: Admin_Ops_Queues_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Queues_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_queues_title(inputs)
	if (locale === "de") return de_admin_ops_queues_title(inputs)
	if (locale === "fr") return fr_admin_ops_queues_title(inputs)
	if (locale === "it") return it_admin_ops_queues_title(inputs)
	if (locale === "nl") return nl_admin_ops_queues_title(inputs)
	if (locale === "pl") return pl_admin_ops_queues_title(inputs)
	if (locale === "pt") return pt_admin_ops_queues_title(inputs)
	if (locale === "ru") return ru_admin_ops_queues_title(inputs)
	if (locale === "sv") return sv_admin_ops_queues_title(inputs)
	if (locale === "tr") return tr_admin_ops_queues_title(inputs)
	if (locale === "zh") return zh_admin_ops_queues_title(inputs)
	if (locale === "ja") return ja_admin_ops_queues_title(inputs)
	return en_admin_ops_queues_title(inputs)
});
