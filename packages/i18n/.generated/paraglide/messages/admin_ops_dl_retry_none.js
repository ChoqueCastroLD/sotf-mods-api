/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Retry_NoneInputs */

const en_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`There were no failed jobs to retry.`)
};

const es_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No había tareas fallidas que reintentar.`)
};

const de_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es gab keine fehlgeschlagenen Jobs zum erneuten Ausführen.`)
};

const fr_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune tâche en échec à relancer.`)
};

const it_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non c’erano job falliti da riprovare.`)
};

const nl_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Er waren geen mislukte taken om opnieuw te proberen.`)
};

const pl_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie było nieudanych zadań do ponowienia.`)
};

const pt_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não havia tarefas com falha para tentar de novo.`)
};

const ru_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неудачных задач для повтора не было.`)
};

const sv_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det fanns inga misslyckade jobb att försöka igen med.`)
};

const tr_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden denenecek başarısız iş yoktu.`)
};

const zh_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有需要重试的失败任务。`)
};

const ja_admin_ops_dl_retry_none = /** @type {(inputs: Admin_Ops_Dl_Retry_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行する失敗したジョブはありませんでした。`)
};

/**
* | output |
* | --- |
* | "There were no failed jobs to retry." |
*
* @param {Admin_Ops_Dl_Retry_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry_none = /** @type {((inputs?: Admin_Ops_Dl_Retry_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry_none(inputs)
	if (locale === "de") return de_admin_ops_dl_retry_none(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry_none(inputs)
	if (locale === "it") return it_admin_ops_dl_retry_none(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry_none(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry_none(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry_none(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry_none(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry_none(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry_none(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry_none(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry_none(inputs)
	return en_admin_ops_dl_retry_none(inputs)
});
