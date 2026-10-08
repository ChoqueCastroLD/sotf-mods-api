/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_Col_JobsInputs */

const en_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs`)
};

const es_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tareas`)
};

const de_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs`)
};

const fr_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tâches`)
};

const it_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job`)
};

const nl_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taken`)
};

const pl_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadania`)
};

const pt_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarefas`)
};

const ru_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Задачи`)
};

const sv_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobb`)
};

const tr_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İşler`)
};

const zh_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任务`)
};

const ja_admin_ops_dl_col_jobs = /** @type {(inputs: Admin_Ops_Dl_Col_JobsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジョブ`)
};

/**
* | output |
* | --- |
* | "Jobs" |
*
* @param {Admin_Ops_Dl_Col_JobsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_col_jobs = /** @type {((inputs?: Admin_Ops_Dl_Col_JobsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_Col_JobsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_col_jobs(inputs)
	if (locale === "de") return de_admin_ops_dl_col_jobs(inputs)
	if (locale === "fr") return fr_admin_ops_dl_col_jobs(inputs)
	if (locale === "it") return it_admin_ops_dl_col_jobs(inputs)
	if (locale === "nl") return nl_admin_ops_dl_col_jobs(inputs)
	if (locale === "pl") return pl_admin_ops_dl_col_jobs(inputs)
	if (locale === "pt") return pt_admin_ops_dl_col_jobs(inputs)
	if (locale === "ru") return ru_admin_ops_dl_col_jobs(inputs)
	if (locale === "sv") return sv_admin_ops_dl_col_jobs(inputs)
	if (locale === "tr") return tr_admin_ops_dl_col_jobs(inputs)
	if (locale === "zh") return zh_admin_ops_dl_col_jobs(inputs)
	if (locale === "ja") return ja_admin_ops_dl_col_jobs(inputs)
	return en_admin_ops_dl_col_jobs(inputs)
});
