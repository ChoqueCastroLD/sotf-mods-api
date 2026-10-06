/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Go_LogsInputs */

const en_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share logs`)
};

const es_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir logs`)
};

const de_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs teilen`)
};

const fr_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager des logs`)
};

const it_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi i log`)
};

const nl_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs delen`)
};

const pl_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij logi`)
};

const pt_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartilhar logs`)
};

const ru_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться логами`)
};

const sv_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela loggar`)
};

const tr_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log paylaş`)
};

const zh_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享日志`)
};

const ja_cmdk_go_logs = /** @type {(inputs: Cmdk_Go_LogsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを共有`)
};

/**
* | output |
* | --- |
* | "Share logs" |
*
* @param {Cmdk_Go_LogsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_go_logs = /** @type {((inputs?: Cmdk_Go_LogsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Go_LogsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_go_logs(inputs)
	if (locale === "de") return de_cmdk_go_logs(inputs)
	if (locale === "fr") return fr_cmdk_go_logs(inputs)
	if (locale === "it") return it_cmdk_go_logs(inputs)
	if (locale === "nl") return nl_cmdk_go_logs(inputs)
	if (locale === "pl") return pl_cmdk_go_logs(inputs)
	if (locale === "pt") return pt_cmdk_go_logs(inputs)
	if (locale === "ru") return ru_cmdk_go_logs(inputs)
	if (locale === "sv") return sv_cmdk_go_logs(inputs)
	if (locale === "tr") return tr_cmdk_go_logs(inputs)
	if (locale === "zh") return zh_cmdk_go_logs(inputs)
	if (locale === "ja") return ja_cmdk_go_logs(inputs)
	return en_cmdk_go_logs(inputs)
});
