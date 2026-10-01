/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Nav_LinkInputs */

const en_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share logs`)
};

const es_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compartir logs`)
};

const de_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs teilen`)
};

const fr_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager des logs`)
};

const it_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi i log`)
};

const nl_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs delen`)
};

const pl_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij logi`)
};

const pt_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhar logs`)
};

const ru_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться логами`)
};

const sv_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela loggar`)
};

const tr_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Log paylaş`)
};

const zh_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享日志`)
};

const ja_logs_nav_link = /** @type {(inputs: Logs_Nav_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを共有`)
};

/**
* | output |
* | --- |
* | "Share logs" |
*
* @param {Logs_Nav_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_nav_link = /** @type {((inputs?: Logs_Nav_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Nav_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_nav_link(inputs)
	if (locale === "de") return de_logs_nav_link(inputs)
	if (locale === "fr") return fr_logs_nav_link(inputs)
	if (locale === "it") return it_logs_nav_link(inputs)
	if (locale === "nl") return nl_logs_nav_link(inputs)
	if (locale === "pl") return pl_logs_nav_link(inputs)
	if (locale === "pt") return pt_logs_nav_link(inputs)
	if (locale === "ru") return ru_logs_nav_link(inputs)
	if (locale === "sv") return sv_logs_nav_link(inputs)
	if (locale === "tr") return tr_logs_nav_link(inputs)
	if (locale === "zh") return zh_logs_nav_link(inputs)
	if (locale === "ja") return ja_logs_nav_link(inputs)
	return en_logs_nav_link(inputs)
});
