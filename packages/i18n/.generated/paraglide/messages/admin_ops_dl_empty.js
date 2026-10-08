/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_EmptyInputs */

const en_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No failed jobs are waiting.`)
};

const es_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay tareas fallidas en espera.`)
};

const de_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine fehlgeschlagenen Jobs warten.`)
};

const fr_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune tâche en échec n’attend.`)
};

const it_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun job fallito in attesa.`)
};

const nl_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er wachten geen mislukte taken.`)
};

const pl_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Żadne nieudane zadania nie czekają.`)
};

const pt_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma tarefa com falha em espera.`)
};

const ru_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неудачных задач в ожидании нет.`)
};

const sv_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga misslyckade jobb väntar.`)
};

const tr_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekleyen başarısız iş yok.`)
};

const zh_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有等待处理的失败任务。`)
};

const ja_admin_ops_dl_empty = /** @type {(inputs: Admin_Ops_Dl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待機中の失敗したジョブはありません。`)
};

/**
* | output |
* | --- |
* | "No failed jobs are waiting." |
*
* @param {Admin_Ops_Dl_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_empty = /** @type {((inputs?: Admin_Ops_Dl_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_empty(inputs)
	if (locale === "de") return de_admin_ops_dl_empty(inputs)
	if (locale === "fr") return fr_admin_ops_dl_empty(inputs)
	if (locale === "it") return it_admin_ops_dl_empty(inputs)
	if (locale === "nl") return nl_admin_ops_dl_empty(inputs)
	if (locale === "pl") return pl_admin_ops_dl_empty(inputs)
	if (locale === "pt") return pt_admin_ops_dl_empty(inputs)
	if (locale === "ru") return ru_admin_ops_dl_empty(inputs)
	if (locale === "sv") return sv_admin_ops_dl_empty(inputs)
	if (locale === "tr") return tr_admin_ops_dl_empty(inputs)
	if (locale === "zh") return zh_admin_ops_dl_empty(inputs)
	if (locale === "ja") return ja_admin_ops_dl_empty(inputs)
	return en_admin_ops_dl_empty(inputs)
});
