/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Discard_All_TitleInputs */

const en_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discard all failed jobs?`)
};

const es_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Descartar todas las tareas fallidas?`)
};

const de_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle fehlgeschlagenen Jobs verwerfen?`)
};

const fr_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abandonner toutes les tâches en échec ?`)
};

const it_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scartare tutti i job falliti?`)
};

const nl_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle mislukte taken verwijderen?`)
};

const pl_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzucić wszystkie nieudane zadania?`)
};

const pt_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar todas as tarefas com falha?`)
};

const ru_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить все неудачные задачи?`)
};

const sv_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slänga alla misslyckade jobb?`)
};

const tr_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm başarısız işler atılsın mı?`)
};

const zh_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`丢弃所有失败任务?`)
};

const ja_admin_ops_dl_discard_all_title = /** @type {(inputs: Admin_Ops_Dl_Discard_All_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗したジョブをすべて破棄しますか?`)
};

/**
* | output |
* | --- |
* | "Discard all failed jobs?" |
*
* @param {Admin_Ops_Dl_Discard_All_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_discard_all_title = /** @type {((inputs?: Admin_Ops_Dl_Discard_All_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Discard_All_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_discard_all_title(inputs)
	if (locale === "de") return de_admin_ops_dl_discard_all_title(inputs)
	if (locale === "fr") return fr_admin_ops_dl_discard_all_title(inputs)
	if (locale === "it") return it_admin_ops_dl_discard_all_title(inputs)
	if (locale === "nl") return nl_admin_ops_dl_discard_all_title(inputs)
	if (locale === "pl") return pl_admin_ops_dl_discard_all_title(inputs)
	if (locale === "pt") return pt_admin_ops_dl_discard_all_title(inputs)
	if (locale === "ru") return ru_admin_ops_dl_discard_all_title(inputs)
	if (locale === "sv") return sv_admin_ops_dl_discard_all_title(inputs)
	if (locale === "tr") return tr_admin_ops_dl_discard_all_title(inputs)
	if (locale === "zh") return zh_admin_ops_dl_discard_all_title(inputs)
	if (locale === "ja") return ja_admin_ops_dl_discard_all_title(inputs)
	return en_admin_ops_dl_discard_all_title(inputs)
});
