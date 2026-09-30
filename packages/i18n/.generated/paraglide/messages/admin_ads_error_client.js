/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Error_ClientInputs */

const en_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use ca-pub- followed by 10 to 20 digits.`)
};

const es_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa ca-pub- seguido de 10 a 20 dígitos.`)
};

const de_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nutze ca-pub- gefolgt von 10 bis 20 Ziffern.`)
};

const fr_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez ca-pub- suivi de 10 à 20 chiffres.`)
};

const it_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa ca-pub- seguito da 10 a 20 cifre.`)
};

const nl_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik ca-pub- gevolgd door 10 tot 20 cijfers.`)
};

const pl_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Użyj ca-pub- i od 10 do 20 cyfr.`)
};

const pt_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use ca-pub- seguido de 10 a 20 dígitos.`)
};

const ru_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Формат: ca-pub- и от 10 до 20 цифр.`)
};

const sv_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd ca-pub- följt av 10 till 20 siffror.`)
};

const tr_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- ve ardından 10 ile 20 arası rakam kullan.`)
};

const zh_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`格式为 ca-pub- 加 10 到 20 位数字。`)
};

const ja_admin_ads_error_client = /** @type {(inputs: Admin_Ads_Error_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- に続けて 10〜20 桁の数字を入力してください。`)
};

/**
* | output |
* | --- |
* | "Use ca-pub- followed by 10 to 20 digits." |
*
* @param {Admin_Ads_Error_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_error_client = /** @type {((inputs?: Admin_Ads_Error_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Error_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_error_client(inputs)
	if (locale === "de") return de_admin_ads_error_client(inputs)
	if (locale === "fr") return fr_admin_ads_error_client(inputs)
	if (locale === "it") return it_admin_ads_error_client(inputs)
	if (locale === "nl") return nl_admin_ads_error_client(inputs)
	if (locale === "pl") return pl_admin_ads_error_client(inputs)
	if (locale === "pt") return pt_admin_ads_error_client(inputs)
	if (locale === "ru") return ru_admin_ads_error_client(inputs)
	if (locale === "sv") return sv_admin_ads_error_client(inputs)
	if (locale === "tr") return tr_admin_ads_error_client(inputs)
	if (locale === "zh") return zh_admin_ads_error_client(inputs)
	if (locale === "ja") return ja_admin_ads_error_client(inputs)
	return en_admin_ads_error_client(inputs)
});
