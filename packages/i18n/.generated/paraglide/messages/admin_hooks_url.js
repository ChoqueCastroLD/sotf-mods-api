/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_UrlInputs */

const en_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook address`)
};

const es_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dirección del webhook`)
};

const de_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook-Adresse`)
};

const fr_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse du webhook`)
};

const it_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indirizzo del webhook`)
};

const nl_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhookadres`)
};

const pl_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres webhooka`)
};

const pt_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endereço do webhook`)
};

const ru_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Адрес вебхука`)
};

const sv_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhookadress`)
};

const tr_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook adresi`)
};

const zh_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook 地址`)
};

const ja_admin_hooks_url = /** @type {(inputs: Admin_Hooks_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook のアドレス`)
};

/**
* | output |
* | --- |
* | "Webhook address" |
*
* @param {Admin_Hooks_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_url = /** @type {((inputs?: Admin_Hooks_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_url(inputs)
	if (locale === "de") return de_admin_hooks_url(inputs)
	if (locale === "fr") return fr_admin_hooks_url(inputs)
	if (locale === "it") return it_admin_hooks_url(inputs)
	if (locale === "nl") return nl_admin_hooks_url(inputs)
	if (locale === "pl") return pl_admin_hooks_url(inputs)
	if (locale === "pt") return pt_admin_hooks_url(inputs)
	if (locale === "ru") return ru_admin_hooks_url(inputs)
	if (locale === "sv") return sv_admin_hooks_url(inputs)
	if (locale === "tr") return tr_admin_hooks_url(inputs)
	if (locale === "zh") return zh_admin_hooks_url(inputs)
	if (locale === "ja") return ja_admin_hooks_url(inputs)
	return en_admin_hooks_url(inputs)
});
