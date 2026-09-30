/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queued: NonNullable<unknown>, active: NonNullable<unknown>, failed: NonNullable<unknown> }} Admin_Ops_Queues_DescriptionInputs */

const en_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Queues with any job in the last 24 h, busiest first. Waiting: ${i?.queued} · running: ${i?.active} · failed in 24 h: ${i?.failed}`)
};

const es_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Colas con alguna tarea en las últimas 24 h, las más activas primero. En espera: ${i?.queued} · en curso: ${i?.active} · fallidas en 24 h: ${i?.failed}`)
};

const de_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Warteschlangen mit Jobs in den letzten 24 h, die aktivsten zuerst. Wartend: ${i?.queued} · laufend: ${i?.active} · fehlgeschlagen in 24 h: ${i?.failed}`)
};

const fr_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Files avec au moins une tâche ces dernières 24 h, les plus actives d’abord. En attente : ${i?.queued} · en cours : ${i?.active} · en échec sur 24 h : ${i?.failed}`)
};

const it_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Code con almeno un job nelle ultime 24 h, le più attive prima. In attesa: ${i?.queued} · in corso: ${i?.active} · falliti in 24 h: ${i?.failed}`)
};

const nl_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wachtrijen met taken in de afgelopen 24 u, drukste eerst. Wachtend: ${i?.queued} · bezig: ${i?.active} · mislukt in 24 u: ${i?.failed}`)
};

const pl_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kolejki z zadaniami w ostatnich 24 h, najbardziej obciążone najpierw. Czekające: ${i?.queued} · w toku: ${i?.active} · nieudane w 24 h: ${i?.failed}`)
};

const pt_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filas com alguma tarefa nas últimas 24 h, as mais ativas primeiro. Na fila: ${i?.queued} · em execução: ${i?.active} · com falha em 24 h: ${i?.failed}`)
};

const ru_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Очереди с задачами за последние 24 ч, самые загруженные сверху. Ждут: ${i?.queued} · выполняются: ${i?.active} · с ошибкой за 24 ч: ${i?.failed}`)
};

const sv_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Köer med jobb de senaste 24 h, mest aktiva först. Väntar: ${i?.queued} · körs: ${i?.active} · misslyckade på 24 h: ${i?.failed}`)
};

const tr_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son 24 saatte işi olan kuyruklar, en yoğunu önce. Bekleyen: ${i?.queued} · çalışan: ${i?.active} · 24 saatte başarısız: ${i?.failed}`)
};

const zh_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最近 24 小时内有任务的队列,最繁忙的在前。等待:${i?.queued} · 运行中:${i?.active} · 24 小时内失败:${i?.failed}`)
};

const ja_admin_ops_queues_description = /** @type {(inputs: Admin_Ops_Queues_DescriptionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`直近 24 時間にジョブがあったキュー(多い順)。待機: ${i?.queued} · 実行中: ${i?.active} · 24 時間の失敗: ${i?.failed}`)
};

/**
* | output |
* | --- |
* | "Queues with any job in the last 24 h, busiest first. Waiting: {queued} · running: {active} · failed in 24 h: {failed}" |
*
* @param {Admin_Ops_Queues_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_queues_description = /** @type {((inputs: Admin_Ops_Queues_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Queues_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_queues_description(inputs)
	if (locale === "de") return de_admin_ops_queues_description(inputs)
	if (locale === "fr") return fr_admin_ops_queues_description(inputs)
	if (locale === "it") return it_admin_ops_queues_description(inputs)
	if (locale === "nl") return nl_admin_ops_queues_description(inputs)
	if (locale === "pl") return pl_admin_ops_queues_description(inputs)
	if (locale === "pt") return pt_admin_ops_queues_description(inputs)
	if (locale === "ru") return ru_admin_ops_queues_description(inputs)
	if (locale === "sv") return sv_admin_ops_queues_description(inputs)
	if (locale === "tr") return tr_admin_ops_queues_description(inputs)
	if (locale === "zh") return zh_admin_ops_queues_description(inputs)
	if (locale === "ja") return ja_admin_ops_queues_description(inputs)
	return en_admin_ops_queues_description(inputs)
});
