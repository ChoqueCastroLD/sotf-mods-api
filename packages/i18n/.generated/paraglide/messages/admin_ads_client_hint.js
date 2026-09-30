/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Client_HintInputs */

const en_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- followed by digits.`)
};

const es_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- seguido de dígitos.`)
};

const de_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- gefolgt von Ziffern.`)
};

const fr_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- suivi de chiffres.`)
};

const it_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- seguito da cifre.`)
};

const nl_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- gevolgd door cijfers.`)
};

const pl_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- i cyfry.`)
};

const pt_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- seguido de dígitos.`)
};

const ru_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- и цифры.`)
};

const sv_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- följt av siffror.`)
};

const tr_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- ve ardından rakamlar.`)
};

const zh_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- 加数字。`)
};

const ja_admin_ads_client_hint = /** @type {(inputs: Admin_Ads_Client_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ca-pub- に続けて数字。`)
};

/**
* | output |
* | --- |
* | "ca-pub- followed by digits." |
*
* @param {Admin_Ads_Client_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_client_hint = /** @type {((inputs?: Admin_Ads_Client_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Client_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_client_hint(inputs)
	if (locale === "de") return de_admin_ads_client_hint(inputs)
	if (locale === "fr") return fr_admin_ads_client_hint(inputs)
	if (locale === "it") return it_admin_ads_client_hint(inputs)
	if (locale === "nl") return nl_admin_ads_client_hint(inputs)
	if (locale === "pl") return pl_admin_ads_client_hint(inputs)
	if (locale === "pt") return pt_admin_ads_client_hint(inputs)
	if (locale === "ru") return ru_admin_ads_client_hint(inputs)
	if (locale === "sv") return sv_admin_ads_client_hint(inputs)
	if (locale === "tr") return tr_admin_ads_client_hint(inputs)
	if (locale === "zh") return zh_admin_ads_client_hint(inputs)
	if (locale === "ja") return ja_admin_ads_client_hint(inputs)
	return en_admin_ads_client_hint(inputs)
});
