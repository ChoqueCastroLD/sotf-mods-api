/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Error_UrlInputs */

const en_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paste a Discord webhook address.`)
};

const es_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pega una dirección de webhook de Discord.`)
};

const de_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Füge eine Discord-Webhook-Adresse ein.`)
};

const fr_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Collez une adresse de webhook Discord.`)
};

const it_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Incolla un indirizzo di webhook di Discord.`)
};

const nl_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plak een Discord-webhookadres.`)
};

const pl_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wklej adres webhooka Discorda.`)
};

const pt_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cole um endereço de webhook do Discord.`)
};

const ru_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вставьте адрес вебхука Discord.`)
};

const sv_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klistra in en Discord-webhookadress.`)
};

const tr_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir Discord webhook adresi yapıştır.`)
};

const zh_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请粘贴 Discord Webhook 地址。`)
};

const ja_admin_hooks_error_url = /** @type {(inputs: Admin_Hooks_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord の Webhook アドレスを貼り付けてください。`)
};

/**
* | output |
* | --- |
* | "Paste a Discord webhook address." |
*
* @param {Admin_Hooks_Error_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_error_url = /** @type {((inputs?: Admin_Hooks_Error_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Error_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_error_url(inputs)
	if (locale === "de") return de_admin_hooks_error_url(inputs)
	if (locale === "fr") return fr_admin_hooks_error_url(inputs)
	if (locale === "it") return it_admin_hooks_error_url(inputs)
	if (locale === "nl") return nl_admin_hooks_error_url(inputs)
	if (locale === "pl") return pl_admin_hooks_error_url(inputs)
	if (locale === "pt") return pt_admin_hooks_error_url(inputs)
	if (locale === "ru") return ru_admin_hooks_error_url(inputs)
	if (locale === "sv") return sv_admin_hooks_error_url(inputs)
	if (locale === "tr") return tr_admin_hooks_error_url(inputs)
	if (locale === "zh") return zh_admin_hooks_error_url(inputs)
	if (locale === "ja") return ja_admin_hooks_error_url(inputs)
	return en_admin_hooks_error_url(inputs)
});
