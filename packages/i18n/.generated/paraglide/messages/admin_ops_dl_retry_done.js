/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queue: NonNullable<unknown>, count: NonNullable<unknown> }} Admin_Ops_Dl_Retry_DoneInputs */

const en_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobs sent back to ${i?.queue}: ${i?.count}.`)
};

const es_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas devueltas a ${i?.queue}: ${i?.count}.`)
};

const de_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zurück an ${i?.queue} geschickte Jobs: ${i?.count}.`)
};

const fr_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches renvoyées vers ${i?.queue} : ${i?.count}.`)
};

const it_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job rimandati in ${i?.queue}: ${i?.count}.`)
};

const nl_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Teruggestuurde taken naar ${i?.queue}: ${i?.count}.`)
};

const pl_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zadania odesłane do ${i?.queue}: ${i?.count}.`)
};

const pt_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas devolvidas a ${i?.queue}: ${i?.count}.`)
};

const ru_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Задач возвращено в ${i?.queue}: ${i?.count}.`)
};

const sv_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jobb som skickats tillbaka till ${i?.queue}: ${i?.count}.`)
};

const tr_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} kuyruğuna geri gönderilen işler: ${i?.count}.`)
};

const zh_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已送回 ${i?.queue} 的任务:${i?.count}。`)
};

const ja_admin_ops_dl_retry_done = /** @type {(inputs: Admin_Ops_Dl_Retry_DoneInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} に戻したジョブ: ${i?.count}。`)
};

/**
* | output |
* | --- |
* | "Jobs sent back to {queue}: {count}." |
*
* @param {Admin_Ops_Dl_Retry_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry_done = /** @type {((inputs: Admin_Ops_Dl_Retry_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry_done(inputs)
	if (locale === "de") return de_admin_ops_dl_retry_done(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry_done(inputs)
	if (locale === "it") return it_admin_ops_dl_retry_done(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry_done(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry_done(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry_done(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry_done(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry_done(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry_done(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry_done(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry_done(inputs)
	return en_admin_ops_dl_retry_done(inputs)
});
