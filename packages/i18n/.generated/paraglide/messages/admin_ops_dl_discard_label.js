/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queue: NonNullable<unknown> }} Admin_Ops_Dl_Discard_LabelInputs */

const en_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Discard the failed jobs of ${i?.queue}`)
};

const es_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descartar las tareas fallidas de ${i?.queue}`)
};

const de_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagene Jobs von ${i?.queue} verwerfen`)
};

const fr_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abandonner les tâches en échec de ${i?.queue}`)
};

const it_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scarta i job falliti di ${i?.queue}`)
};

const nl_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mislukte taken van ${i?.queue} verwijderen`)
};

const pl_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odrzuć nieudane zadania z kolejki ${i?.queue}`)
};

const pt_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descartar as tarefas com falha de ${i?.queue}`)
};

const ru_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить неудачные задачи очереди ${i?.queue}`)
};

const sv_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Släng de misslyckade jobben i ${i?.queue}`)
};

const tr_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} kuyruğunun başarısız işlerini at`)
};

const zh_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`丢弃 ${i?.queue} 的失败任务`)
};

const ja_admin_ops_dl_discard_label = /** @type {(inputs: Admin_Ops_Dl_Discard_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} の失敗したジョブを破棄`)
};

/**
* | output |
* | --- |
* | "Discard the failed jobs of {queue}" |
*
* @param {Admin_Ops_Dl_Discard_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_label = /** @type {((inputs: Admin_Ops_Dl_Discard_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_label(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_label(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_label(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_label(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_label(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_label(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_label(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_label(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_label(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_label(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_label(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_label(inputs)
	return en_admin_ops_dl_discard_label(inputs)
});
