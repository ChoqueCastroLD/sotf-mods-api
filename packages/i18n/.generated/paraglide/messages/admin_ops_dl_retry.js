/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Dl_RetryInputs */

const en_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retry`)
};

const es_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reintentar`)
};

const de_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erneut ausführen`)
};

const fr_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relancer`)
};

const it_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Riprova`)
};

const nl_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opnieuw proberen`)
};

const pl_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ponów`)
};

const pt_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tentar de novo`)
};

const ru_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Повторить`)
};

const sv_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Försök igen`)
};

const tr_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeniden dene`)
};

const zh_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`重试`)
};

const ja_admin_ops_dl_retry = /** @type {(inputs: Admin_Ops_Dl_RetryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`再試行`)
};

/**
* | output |
* | --- |
* | "Retry" |
*
* @param {Admin_Ops_Dl_RetryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_dl_retry = /** @type {((inputs?: Admin_Ops_Dl_RetryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Dl_RetryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_dl_retry(inputs)
	if (locale === "de") return de_admin_ops_dl_retry(inputs)
	if (locale === "fr") return fr_admin_ops_dl_retry(inputs)
	if (locale === "it") return it_admin_ops_dl_retry(inputs)
	if (locale === "nl") return nl_admin_ops_dl_retry(inputs)
	if (locale === "pl") return pl_admin_ops_dl_retry(inputs)
	if (locale === "pt") return pt_admin_ops_dl_retry(inputs)
	if (locale === "ru") return ru_admin_ops_dl_retry(inputs)
	if (locale === "sv") return sv_admin_ops_dl_retry(inputs)
	if (locale === "tr") return tr_admin_ops_dl_retry(inputs)
	if (locale === "zh") return zh_admin_ops_dl_retry(inputs)
	if (locale === "ja") return ja_admin_ops_dl_retry(inputs)
	return en_admin_ops_dl_retry(inputs)
});
