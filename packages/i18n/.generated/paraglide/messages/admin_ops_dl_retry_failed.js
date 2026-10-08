/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Retry_FailedInputs */

const en_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not retry the failed jobs`)
};

const es_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron reintentar las tareas fallidas`)
};

const de_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die fehlgeschlagenen Jobs konnten nicht erneut ausgeführt werden`)
};

const fr_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de relancer les tâches en échec`)
};

const it_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile riprovare i job falliti`)
};

const nl_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mislukte taken konden niet opnieuw worden geprobeerd`)
};

const pl_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się ponowić nieudanych zadań`)
};

const pt_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível tentar de novo as tarefas com falha`)
};

const ru_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось повторить неудачные задачи`)
};

const sv_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att försöka igen med de misslyckade jobben`)
};

const tr_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız işler yeniden denenemedi`)
};

const zh_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法重试失败的任务`)
};

const ja_admin_ops_dl_retry_failed = /** @type {(inputs: Admin_Ops_Dl_Retry_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗したジョブを再試行できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not retry the failed jobs" |
*
* @param {Admin_Ops_Dl_Retry_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry_failed = /** @type {((inputs?: Admin_Ops_Dl_Retry_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry_failed(inputs)
	if (locale === "de") return de_admin_ops_dl_retry_failed(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry_failed(inputs)
	if (locale === "it") return it_admin_ops_dl_retry_failed(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry_failed(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry_failed(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry_failed(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry_failed(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry_failed(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry_failed(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry_failed(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry_failed(inputs)
	return en_admin_ops_dl_retry_failed(inputs)
});
