/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queue: NonNullable<unknown> }} Admin_Ops_Dl_Retry_LabelInputs */

const en_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retry the failed jobs of ${i?.queue}`)
};

const es_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Reintentar las tareas fallidas de ${i?.queue}`)
};

const de_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagene Jobs von ${i?.queue} erneut ausführen`)
};

const fr_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Relancer les tâches en échec de ${i?.queue}`)
};

const it_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Riprova i job falliti di ${i?.queue}`)
};

const nl_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mislukte taken van ${i?.queue} opnieuw proberen`)
};

const pl_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ponów nieudane zadania z kolejki ${i?.queue}`)
};

const pt_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tentar de novo as tarefas com falha de ${i?.queue}`)
};

const ru_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Повторить неудачные задачи очереди ${i?.queue}`)
};

const sv_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Försök igen med de misslyckade jobben i ${i?.queue}`)
};

const tr_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} kuyruğunun başarısız işlerini yeniden dene`)
};

const zh_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`重试 ${i?.queue} 的失败任务`)
};

const ja_admin_ops_dl_retry_label = /** @type {(inputs: Admin_Ops_Dl_Retry_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} の失敗したジョブを再試行`)
};

/**
* | output |
* | --- |
* | "Retry the failed jobs of {queue}" |
*
* @param {Admin_Ops_Dl_Retry_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry_label = /** @type {((inputs: Admin_Ops_Dl_Retry_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Retry_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry_label(inputs)
	if (locale === "de") return de_admin_ops_dl_retry_label(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry_label(inputs)
	if (locale === "it") return it_admin_ops_dl_retry_label(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry_label(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry_label(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry_label(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry_label(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry_label(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry_label(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry_label(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry_label(inputs)
	return en_admin_ops_dl_retry_label(inputs)
});
