/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_No_UsageInputs */

const en_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No requests in this period.`)
};

const es_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hubo peticiones en este periodo.`)
};

const de_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Anfragen in diesem Zeitraum.`)
};

const fr_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune requête sur cette période.`)
};

const it_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna richiesta in questo periodo.`)
};

const nl_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen verzoeken in deze periode.`)
};

const pl_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak żądań w tym okresie.`)
};

const pt_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma requisição neste período.`)
};

const ru_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`За этот период запросов не было.`)
};

const sv_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga anrop under perioden.`)
};

const tr_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu dönemde istek yok.`)
};

const zh_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此期间没有请求。`)
};

const ja_admin_kelvin_no_usage = /** @type {(inputs: Admin_Kelvin_No_UsageInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この期間のリクエストはありません。`)
};

/**
* | output |
* | --- |
* | "No requests in this period." |
*
* @param {Admin_Kelvin_No_UsageInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_no_usage = /** @type {((inputs?: Admin_Kelvin_No_UsageInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_No_UsageInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_no_usage(inputs)
	if (locale === "de") return de_admin_kelvin_no_usage(inputs)
	if (locale === "fr") return fr_admin_kelvin_no_usage(inputs)
	if (locale === "it") return it_admin_kelvin_no_usage(inputs)
	if (locale === "nl") return nl_admin_kelvin_no_usage(inputs)
	if (locale === "pl") return pl_admin_kelvin_no_usage(inputs)
	if (locale === "pt") return pt_admin_kelvin_no_usage(inputs)
	if (locale === "ru") return ru_admin_kelvin_no_usage(inputs)
	if (locale === "sv") return sv_admin_kelvin_no_usage(inputs)
	if (locale === "tr") return tr_admin_kelvin_no_usage(inputs)
	if (locale === "zh") return zh_admin_kelvin_no_usage(inputs)
	if (locale === "ja") return ja_admin_kelvin_no_usage(inputs)
	return en_admin_kelvin_no_usage(inputs)
});
