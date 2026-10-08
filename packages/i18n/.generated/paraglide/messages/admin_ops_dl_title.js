/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_TitleInputs */

const en_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failed jobs`)
};

const es_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tareas fallidas`)
};

const de_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlgeschlagene Jobs`)
};

const fr_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tâches en échec`)
};

const it_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job falliti`)
};

const nl_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mislukte taken`)
};

const pl_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieudane zadania`)
};

const pt_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tarefas com falha`)
};

const ru_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неудачные задачи`)
};

const sv_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Misslyckade jobb`)
};

const tr_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başarısız işler`)
};

const zh_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败的任务`)
};

const ja_admin_ops_dl_title = /** @type {(inputs: Admin_Ops_Dl_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗したジョブ`)
};

/**
* | output |
* | --- |
* | "Failed jobs" |
*
* @param {Admin_Ops_Dl_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_title = /** @type {((inputs?: Admin_Ops_Dl_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_title(inputs)
	if (locale === "de") return de_admin_ops_dl_title(inputs)
	if (locale === "fr") return fr_admin_ops_dl_title(inputs)
	if (locale === "it") return it_admin_ops_dl_title(inputs)
	if (locale === "nl") return nl_admin_ops_dl_title(inputs)
	if (locale === "pl") return pl_admin_ops_dl_title(inputs)
	if (locale === "pt") return pt_admin_ops_dl_title(inputs)
	if (locale === "ru") return ru_admin_ops_dl_title(inputs)
	if (locale === "sv") return sv_admin_ops_dl_title(inputs)
	if (locale === "tr") return tr_admin_ops_dl_title(inputs)
	if (locale === "zh") return zh_admin_ops_dl_title(inputs)
	if (locale === "ja") return ja_admin_ops_dl_title(inputs)
	return en_admin_ops_dl_title(inputs)
});
