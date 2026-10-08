/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ queue: NonNullable<unknown> }} Admin_Ops_Dl_Discard_TitleInputs */

const en_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Discard the failed jobs of ${i?.queue}?`)
};

const es_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Descartar las tareas fallidas de ${i?.queue}?`)
};

const de_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagene Jobs von ${i?.queue} verwerfen?`)
};

const fr_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Abandonner les tâches en échec de ${i?.queue} ?`)
};

const it_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scartare i job falliti di ${i?.queue}?`)
};

const nl_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mislukte taken van ${i?.queue} verwijderen?`)
};

const pl_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Odrzucić nieudane zadania z kolejki ${i?.queue}?`)
};

const pt_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descartar as tarefas com falha de ${i?.queue}?`)
};

const ru_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Удалить неудачные задачи очереди ${i?.queue}?`)
};

const sv_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Slänga de misslyckade jobben i ${i?.queue}?`)
};

const tr_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} kuyruğunun başarısız işleri atılsın mı?`)
};

const zh_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`丢弃 ${i?.queue} 的失败任务?`)
};

const ja_admin_ops_dl_discard_title = /** @type {(inputs: Admin_Ops_Dl_Discard_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.queue} の失敗したジョブを破棄しますか?`)
};

/**
* | output |
* | --- |
* | "Discard the failed jobs of {queue}?" |
*
* @param {Admin_Ops_Dl_Discard_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_title = /** @type {((inputs: Admin_Ops_Dl_Discard_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_title(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_title(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_title(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_title(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_title(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_title(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_title(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_title(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_title(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_title(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_title(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_title(inputs)
	return en_admin_ops_dl_discard_title(inputs)
});
