/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Queues_EmptyInputs */

const en_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No job ran in the last 24 hours.`)
};

const es_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se ejecutó ninguna tarea en las últimas 24 horas.`)
};

const de_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In den letzten 24 Stunden lief kein Job.`)
};

const fr_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune tâche ces dernières 24 heures.`)
};

const it_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun job nelle ultime 24 ore.`)
};

const nl_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen taken in de afgelopen 24 uur.`)
};

const pl_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W ostatnich 24 godzinach nie uruchomiono żadnego zadania.`)
};

const pt_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma tarefa rodou nas últimas 24 horas.`)
};

const ru_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За последние 24 часа задач не было.`)
};

const sv_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga jobb kördes de senaste 24 timmarna.`)
};

const tr_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son 24 saatte hiç iş çalışmadı.`)
};

const zh_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近 24 小时没有运行任何任务。`)
};

const ja_admin_ops_queues_empty = /** @type {(inputs: Admin_Ops_Queues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`直近 24 時間に実行されたジョブはありません。`)
};

/**
* | output |
* | --- |
* | "No job ran in the last 24 hours." |
*
* @param {Admin_Ops_Queues_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_queues_empty = /** @type {((inputs?: Admin_Ops_Queues_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Queues_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_queues_empty(inputs)
	if (locale === "de") return de_admin_ops_queues_empty(inputs)
	if (locale === "fr") return fr_admin_ops_queues_empty(inputs)
	if (locale === "it") return it_admin_ops_queues_empty(inputs)
	if (locale === "nl") return nl_admin_ops_queues_empty(inputs)
	if (locale === "pl") return pl_admin_ops_queues_empty(inputs)
	if (locale === "pt") return pt_admin_ops_queues_empty(inputs)
	if (locale === "ru") return ru_admin_ops_queues_empty(inputs)
	if (locale === "sv") return sv_admin_ops_queues_empty(inputs)
	if (locale === "tr") return tr_admin_ops_queues_empty(inputs)
	if (locale === "zh") return zh_admin_ops_queues_empty(inputs)
	if (locale === "ja") return ja_admin_ops_queues_empty(inputs)
	return en_admin_ops_queues_empty(inputs)
});
