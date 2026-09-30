/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dead_Letter_TitleInputs */

const en_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs ran out of retries`)
};

const es_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hay tareas sin más reintentos`)
};

const de_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobs ohne weitere Versuche`)
};

const fr_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des tâches n’ont plus de nouvel essai`)
};

const it_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Job senza altri tentativi`)
};

const nl_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taken zonder nieuwe pogingen`)
};

const pl_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zadania wyczerpały próby`)
};

const pt_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Há tarefas sem novas tentativas`)
};

const ru_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У задач закончились попытки`)
};

const sv_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jobb har slut på försök`)
};

const tr_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denemesi tükenen işler var`)
};

const zh_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有任务已耗尽重试次数`)
};

const ja_admin_ops_dead_letter_title = /** @type {(inputs: Admin_Ops_Dead_Letter_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行が尽きたジョブがあります`)
};

/**
* | output |
* | --- |
* | "Jobs ran out of retries" |
*
* @param {Admin_Ops_Dead_Letter_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dead_letter_title = /** @type {((inputs?: Admin_Ops_Dead_Letter_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dead_Letter_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dead_letter_title(inputs)
	if (locale === "de") return de_admin_ops_dead_letter_title(inputs)
	if (locale === "fr") return fr_admin_ops_dead_letter_title(inputs)
	if (locale === "it") return it_admin_ops_dead_letter_title(inputs)
	if (locale === "nl") return nl_admin_ops_dead_letter_title(inputs)
	if (locale === "pl") return pl_admin_ops_dead_letter_title(inputs)
	if (locale === "pt") return pt_admin_ops_dead_letter_title(inputs)
	if (locale === "ru") return ru_admin_ops_dead_letter_title(inputs)
	if (locale === "sv") return sv_admin_ops_dead_letter_title(inputs)
	if (locale === "tr") return tr_admin_ops_dead_letter_title(inputs)
	if (locale === "zh") return zh_admin_ops_dead_letter_title(inputs)
	if (locale === "ja") return ja_admin_ops_dead_letter_title(inputs)
	return en_admin_ops_dead_letter_title(inputs)
});
