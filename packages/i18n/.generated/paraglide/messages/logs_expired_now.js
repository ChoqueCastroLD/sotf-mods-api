/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Expired_NowInputs */

const en_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expired`)
};

const es_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caducado`)
};

const de_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abgelaufen`)
};

const fr_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expiré`)
};

const it_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scaduto`)
};

const nl_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verlopen`)
};

const pl_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygasł`)
};

const pt_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expirado`)
};

const ru_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок истёк`)
};

const sv_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utgången`)
};

const tr_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Süresi doldu`)
};

const zh_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已过期`)
};

const ja_logs_expired_now = /** @type {(inputs: Logs_Expired_NowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`期限切れ`)
};

/**
* | output |
* | --- |
* | "Expired" |
*
* @param {Logs_Expired_NowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_expired_now = /** @type {((inputs?: Logs_Expired_NowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Expired_NowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_expired_now(inputs)
	if (locale === "de") return de_logs_expired_now(inputs)
	if (locale === "fr") return fr_logs_expired_now(inputs)
	if (locale === "it") return it_logs_expired_now(inputs)
	if (locale === "nl") return nl_logs_expired_now(inputs)
	if (locale === "pl") return pl_logs_expired_now(inputs)
	if (locale === "pt") return pt_logs_expired_now(inputs)
	if (locale === "ru") return ru_logs_expired_now(inputs)
	if (locale === "sv") return sv_logs_expired_now(inputs)
	if (locale === "tr") return tr_logs_expired_now(inputs)
	if (locale === "zh") return zh_logs_expired_now(inputs)
	if (locale === "ja") return ja_logs_expired_now(inputs)
	return en_logs_expired_now(inputs)
});
