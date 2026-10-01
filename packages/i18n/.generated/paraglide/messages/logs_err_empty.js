/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Err_EmptyInputs */

const en_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste or drop a log first.`)
};

const es_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Primero pega o suelta un log.`)
};

const de_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge zuerst ein Log ein oder ziehe eines hinein.`)
};

const fr_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez ou déposez d’abord un log.`)
};

const it_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla o trascina prima un log.`)
};

const nl_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak of sleep eerst een log.`)
};

const pl_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najpierw wklej lub upuść log.`)
};

const pt_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole ou largue primeiro um log.`)
};

const ru_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сначала вставьте или перетащите лог.`)
};

const sv_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in eller släpp en logg först.`)
};

const tr_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önce bir log yapıştırın ya da bırakın.`)
};

const zh_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请先粘贴或拖入日志。`)
};

const ja_logs_err_empty = /** @type {(inputs: Logs_Err_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先にログを貼り付けるかドロップしてください。`)
};

/**
* | output |
* | --- |
* | "Paste or drop a log first." |
*
* @param {Logs_Err_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_err_empty = /** @type {((inputs?: Logs_Err_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Err_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_err_empty(inputs)
	if (locale === "de") return de_logs_err_empty(inputs)
	if (locale === "fr") return fr_logs_err_empty(inputs)
	if (locale === "it") return it_logs_err_empty(inputs)
	if (locale === "nl") return nl_logs_err_empty(inputs)
	if (locale === "pl") return pl_logs_err_empty(inputs)
	if (locale === "pt") return pt_logs_err_empty(inputs)
	if (locale === "ru") return ru_logs_err_empty(inputs)
	if (locale === "sv") return sv_logs_err_empty(inputs)
	if (locale === "tr") return tr_logs_err_empty(inputs)
	if (locale === "zh") return zh_logs_err_empty(inputs)
	if (locale === "ja") return ja_logs_err_empty(inputs)
	return en_logs_err_empty(inputs)
});
