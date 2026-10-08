/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Admin_Ops_Dl_DiscardedInputs */

const en_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Failed jobs discarded: ${i?.count}.`)
};

const es_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tareas fallidas descartadas: ${i?.count}.`)
};

const de_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verworfene fehlgeschlagene Jobs: ${i?.count}.`)
};

const fr_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tâches en échec abandonnées : ${i?.count}.`)
};

const it_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Job falliti scartati: ${i?.count}.`)
};

const nl_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwijderde mislukte taken: ${i?.count}.`)
};

const pl_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odrzucone nieudane zadania: ${i?.count}.`)
};

const pt_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tarefas com falha descartadas: ${i?.count}.`)
};

const ru_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалено неудачных задач: ${i?.count}.`)
};

const sv_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Slängda misslyckade jobb: ${i?.count}.`)
};

const tr_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Atılan başarısız işler: ${i?.count}.`)
};

const zh_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已丢弃的失败任务:${i?.count}。`)
};

const ja_admin_ops_dl_discarded = /** @type {(inputs: Admin_Ops_Dl_DiscardedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`破棄した失敗ジョブ: ${i?.count}。`)
};

/**
* | output |
* | --- |
* | "Failed jobs discarded: {count}." |
*
* @param {Admin_Ops_Dl_DiscardedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discarded = /** @type {((inputs: Admin_Ops_Dl_DiscardedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_DiscardedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discarded(inputs)
	if (locale === "de") return de_admin_ops_dl_discarded(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discarded(inputs)
	if (locale === "it") return it_admin_ops_dl_discarded(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discarded(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discarded(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discarded(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discarded(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discarded(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discarded(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discarded(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discarded(inputs)
	return en_admin_ops_dl_discarded(inputs)
});
