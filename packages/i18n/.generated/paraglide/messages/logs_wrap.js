/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_WrapInputs */

const en_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wrap lines`)
};

const es_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajustar líneas`)
};

const de_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zeilen umbrechen`)
};

const fr_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la ligne`)
};

const it_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A capo automatico`)
};

const nl_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regels afbreken`)
};

const pl_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zawijaj wiersze`)
};

const pt_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quebrar linhas`)
};

const ru_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переносить строки`)
};

const sv_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radbryt`)
};

const tr_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Satırları kaydır`)
};

const zh_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自动换行`)
};

const ja_logs_wrap = /** @type {(inputs: Logs_WrapInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`行を折り返す`)
};

/**
* | output |
* | --- |
* | "Wrap lines" |
*
* @param {Logs_WrapInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_wrap = /** @type {((inputs?: Logs_WrapInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_WrapInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_wrap(inputs)
	if (locale === "de") return de_logs_wrap(inputs)
	if (locale === "fr") return fr_logs_wrap(inputs)
	if (locale === "it") return it_logs_wrap(inputs)
	if (locale === "nl") return nl_logs_wrap(inputs)
	if (locale === "pl") return pl_logs_wrap(inputs)
	if (locale === "pt") return pt_logs_wrap(inputs)
	if (locale === "ru") return ru_logs_wrap(inputs)
	if (locale === "sv") return sv_logs_wrap(inputs)
	if (locale === "tr") return tr_logs_wrap(inputs)
	if (locale === "zh") return zh_logs_wrap(inputs)
	if (locale === "ja") return ja_logs_wrap(inputs)
	return en_logs_wrap(inputs)
});
