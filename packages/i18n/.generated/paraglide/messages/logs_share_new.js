/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Share_NewInputs */

const en_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share a new log`)
};

const es_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir un log nuevo`)
};

const de_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Log teilen`)
};

const fr_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager un nouveau log`)
};

const it_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi un nuovo log`)
};

const nl_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een nieuwe log delen`)
};

const pl_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij nowy log`)
};

const pt_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhar um novo log`)
};

const ru_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться новым логом`)
};

const sv_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela en ny logg`)
};

const tr_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni bir log paylaş`)
};

const zh_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享新日志`)
};

const ja_logs_share_new = /** @type {(inputs: Logs_Share_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいログを共有`)
};

/**
* | output |
* | --- |
* | "Share a new log" |
*
* @param {Logs_Share_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_share_new = /** @type {((inputs?: Logs_Share_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Share_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_share_new(inputs)
	if (locale === "de") return de_logs_share_new(inputs)
	if (locale === "fr") return fr_logs_share_new(inputs)
	if (locale === "it") return it_logs_share_new(inputs)
	if (locale === "nl") return nl_logs_share_new(inputs)
	if (locale === "pl") return pl_logs_share_new(inputs)
	if (locale === "pt") return pt_logs_share_new(inputs)
	if (locale === "ru") return ru_logs_share_new(inputs)
	if (locale === "sv") return sv_logs_share_new(inputs)
	if (locale === "tr") return tr_logs_share_new(inputs)
	if (locale === "zh") return zh_logs_share_new(inputs)
	if (locale === "ja") return ja_logs_share_new(inputs)
	return en_logs_share_new(inputs)
});
