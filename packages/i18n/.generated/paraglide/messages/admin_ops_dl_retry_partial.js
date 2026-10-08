/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queue: NonNullable<unknown>, count: NonNullable<unknown>, failed: NonNullable<unknown> }} Admin_Ops_Dl_Retry_PartialInputs */

const en_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobs sent back to ${i?.queue}: ${i?.count}. Jobs that could not be sent and are still listed: ${i?.failed}.`)
};

const es_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas devueltas a ${i?.queue}: ${i?.count}. Tareas que no se pudieron enviar y siguen en la lista: ${i?.failed}.`)
};

const de_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zurück an ${i?.queue} geschickte Jobs: ${i?.count}. Jobs, die nicht gesendet werden konnten und weiter gelistet sind: ${i?.failed}.`)
};

const fr_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches renvoyées vers ${i?.queue} : ${i?.count}. Tâches qui n’ont pas pu être envoyées et restent listées : ${i?.failed}.`)
};

const it_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job rimandati in ${i?.queue}: ${i?.count}. Job che non è stato possibile inviare e restano nell’elenco: ${i?.failed}.`)
};

const nl_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teruggestuurde taken naar ${i?.queue}: ${i?.count}. Taken die niet verstuurd konden worden en op de lijst blijven: ${i?.failed}.`)
};

const pl_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zadania odesłane do ${i?.queue}: ${i?.count}. Zadania, których nie udało się wysłać i które zostają na liście: ${i?.failed}.`)
};

const pt_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas devolvidas a ${i?.queue}: ${i?.count}. Tarefas que não puderam ser enviadas e continuam na lista: ${i?.failed}.`)
};

const ru_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Задач возвращено в ${i?.queue}: ${i?.count}. Задач, которые не удалось отправить и которые остались в списке: ${i?.failed}.`)
};

const sv_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobb som skickats tillbaka till ${i?.queue}: ${i?.count}. Jobb som inte kunde skickas och finns kvar i listan: ${i?.failed}.`)
};

const tr_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} kuyruğuna geri gönderilen işler: ${i?.count}. Gönderilemeyen ve listede kalan işler: ${i?.failed}.`)
};

const zh_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已送回 ${i?.queue} 的任务:${i?.count}。未能发送、仍在列表中的任务:${i?.failed}。`)
};

const ja_admin_ops_dl_retry_partial = /** @type {(inputs: Admin_Ops_Dl_Retry_PartialInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} に戻したジョブ: ${i?.count}。送信できず一覧に残っているジョブ: ${i?.failed}。`)
};

/**
* | output |
* | --- |
* | "Jobs sent back to {queue}: {count}. Jobs that could not be sent and are still listed: {failed}." |
*
* @param {Admin_Ops_Dl_Retry_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry_partial = /** @type {((inputs: Admin_Ops_Dl_Retry_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry_partial(inputs)
	if (locale === "de") return de_admin_ops_dl_retry_partial(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry_partial(inputs)
	if (locale === "it") return it_admin_ops_dl_retry_partial(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry_partial(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry_partial(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry_partial(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry_partial(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry_partial(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry_partial(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry_partial(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry_partial(inputs)
	return en_admin_ops_dl_retry_partial(inputs)
});
