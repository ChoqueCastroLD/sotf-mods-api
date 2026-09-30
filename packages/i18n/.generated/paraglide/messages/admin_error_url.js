/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Error_UrlInputs */

const en_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter a full http(s) address.`)
};

const es_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Introduce una dirección http(s) completa.`)
};

const de_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib eine vollständige http(s)-Adresse ein.`)
};

const fr_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez une adresse http(s) complète.`)
};

const it_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci un indirizzo http(s) completo.`)
};

const nl_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vul een volledig http(s)-adres in.`)
};

const pl_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podaj pełny adres http(s).`)
};

const pt_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Informe um endereço http(s) completo.`)
};

const ru_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите полный адрес http(s).`)
};

const sv_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange en fullständig http(s)-adress.`)
};

const tr_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tam bir http(s) adresi gir.`)
};

const zh_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入完整的 http(s) 地址。`)
};

const ja_admin_error_url = /** @type {(inputs: Admin_Error_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`完全な http(s) アドレスを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter a full http(s) address." |
*
* @param {Admin_Error_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_error_url = /** @type {((inputs?: Admin_Error_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Error_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_error_url(inputs)
	if (locale === "de") return de_admin_error_url(inputs)
	if (locale === "fr") return fr_admin_error_url(inputs)
	if (locale === "it") return it_admin_error_url(inputs)
	if (locale === "nl") return nl_admin_error_url(inputs)
	if (locale === "pl") return pl_admin_error_url(inputs)
	if (locale === "pt") return pt_admin_error_url(inputs)
	if (locale === "ru") return ru_admin_error_url(inputs)
	if (locale === "sv") return sv_admin_error_url(inputs)
	if (locale === "tr") return tr_admin_error_url(inputs)
	if (locale === "zh") return zh_admin_error_url(inputs)
	if (locale === "ja") return ja_admin_error_url(inputs)
	return en_admin_error_url(inputs)
});
