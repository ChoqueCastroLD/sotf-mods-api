/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Discard_FailedInputs */

const en_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Could not discard the failed jobs`)
};

const es_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron descartar las tareas fallidas`)
};

const de_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die fehlgeschlagenen Jobs konnten nicht verworfen werden`)
};

const fr_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’abandonner les tâches en échec`)
};

const it_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile scartare i job falliti`)
};

const nl_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De mislukte taken konden niet worden verwijderd`)
};

const pl_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odrzucić nieudanych zadań`)
};

const pt_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível descartar as tarefas com falha`)
};

const ru_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось удалить неудачные задачи`)
};

const sv_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att slänga de misslyckade jobben`)
};

const tr_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız işler atılamadı`)
};

const zh_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法丢弃失败的任务`)
};

const ja_admin_ops_dl_discard_failed = /** @type {(inputs: Admin_Ops_Dl_Discard_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗したジョブを破棄できませんでした`)
};

/**
* | output |
* | --- |
* | "Could not discard the failed jobs" |
*
* @param {Admin_Ops_Dl_Discard_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_failed = /** @type {((inputs?: Admin_Ops_Dl_Discard_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_failed(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_failed(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_failed(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_failed(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_failed(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_failed(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_failed(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_failed(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_failed(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_failed(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_failed(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_failed(inputs)
	return en_admin_ops_dl_discard_failed(inputs)
});
