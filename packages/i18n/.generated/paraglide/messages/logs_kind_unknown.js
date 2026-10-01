/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Kind_UnknownInputs */

const en_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const es_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const de_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const fr_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const it_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const nl_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const pl_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const pt_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const ru_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лог`)
};

const sv_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logg`)
};

const tr_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log`)
};

const zh_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志`)
};

const ja_logs_kind_unknown = /** @type {(inputs: Logs_Kind_UnknownInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログ`)
};

/**
* | output |
* | --- |
* | "Log" |
*
* @param {Logs_Kind_UnknownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_kind_unknown = /** @type {((inputs?: Logs_Kind_UnknownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Kind_UnknownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_kind_unknown(inputs)
	if (locale === "de") return de_logs_kind_unknown(inputs)
	if (locale === "fr") return fr_logs_kind_unknown(inputs)
	if (locale === "it") return it_logs_kind_unknown(inputs)
	if (locale === "nl") return nl_logs_kind_unknown(inputs)
	if (locale === "pl") return pl_logs_kind_unknown(inputs)
	if (locale === "pt") return pt_logs_kind_unknown(inputs)
	if (locale === "ru") return ru_logs_kind_unknown(inputs)
	if (locale === "sv") return sv_logs_kind_unknown(inputs)
	if (locale === "tr") return tr_logs_kind_unknown(inputs)
	if (locale === "zh") return zh_logs_kind_unknown(inputs)
	if (locale === "ja") return ja_logs_kind_unknown(inputs)
	return en_logs_kind_unknown(inputs)
});
