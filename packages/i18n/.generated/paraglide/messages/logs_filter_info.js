/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Filter_InfoInputs */

const en_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const es_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const de_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const fr_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const it_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const nl_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const pl_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const pt_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const ru_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Инфо`)
};

const sv_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Info`)
};

const tr_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilgi`)
};

const zh_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信息`)
};

const ja_logs_filter_info = /** @type {(inputs: Logs_Filter_InfoInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`情報`)
};

/**
* | output |
* | --- |
* | "Info" |
*
* @param {Logs_Filter_InfoInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_filter_info = /** @type {((inputs?: Logs_Filter_InfoInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Filter_InfoInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_filter_info(inputs)
	if (locale === "de") return de_logs_filter_info(inputs)
	if (locale === "fr") return fr_logs_filter_info(inputs)
	if (locale === "it") return it_logs_filter_info(inputs)
	if (locale === "nl") return nl_logs_filter_info(inputs)
	if (locale === "pl") return pl_logs_filter_info(inputs)
	if (locale === "pt") return pt_logs_filter_info(inputs)
	if (locale === "ru") return ru_logs_filter_info(inputs)
	if (locale === "sv") return sv_logs_filter_info(inputs)
	if (locale === "tr") return tr_logs_filter_info(inputs)
	if (locale === "zh") return zh_logs_filter_info(inputs)
	if (locale === "ja") return ja_logs_filter_info(inputs)
	return en_logs_filter_info(inputs)
});
