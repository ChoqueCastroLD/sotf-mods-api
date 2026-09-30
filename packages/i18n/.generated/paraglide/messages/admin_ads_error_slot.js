/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Error_SlotInputs */

const en_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slot IDs are 6 to 20 digits.`)
};

const es_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los ID de bloque tienen de 6 a 20 dígitos.`)
};

const de_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Block-IDs haben 6 bis 20 Ziffern.`)
};

const fr_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les ID de bloc comptent 6 à 20 chiffres.`)
};

const it_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gli ID dei blocchi hanno da 6 a 20 cifre.`)
};

const nl_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blok-ID’s hebben 6 tot 20 cijfers.`)
};

const pl_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID jednostek mają od 6 do 20 cyfr.`)
};

const pt_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`IDs de bloco têm de 6 a 20 dígitos.`)
};

const ru_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID блока — от 6 до 20 цифр.`)
};

const sv_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plats-ID:n har 6 till 20 siffror.`)
};

const tr_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan kimlikleri 6 ile 20 rakam arasındadır.`)
};

const zh_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告位 ID 为 6 到 20 位数字。`)
};

const ja_admin_ads_error_slot = /** @type {(inputs: Admin_Ads_Error_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユニット ID は 6〜20 桁の数字です。`)
};

/**
* | output |
* | --- |
* | "Slot IDs are 6 to 20 digits." |
*
* @param {Admin_Ads_Error_SlotInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_error_slot = /** @type {((inputs?: Admin_Ads_Error_SlotInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Error_SlotInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_error_slot(inputs)
	if (locale === "de") return de_admin_ads_error_slot(inputs)
	if (locale === "fr") return fr_admin_ads_error_slot(inputs)
	if (locale === "it") return it_admin_ads_error_slot(inputs)
	if (locale === "nl") return nl_admin_ads_error_slot(inputs)
	if (locale === "pl") return pl_admin_ads_error_slot(inputs)
	if (locale === "pt") return pt_admin_ads_error_slot(inputs)
	if (locale === "ru") return ru_admin_ads_error_slot(inputs)
	if (locale === "sv") return sv_admin_ads_error_slot(inputs)
	if (locale === "tr") return tr_admin_ads_error_slot(inputs)
	if (locale === "zh") return zh_admin_ads_error_slot(inputs)
	if (locale === "ja") return ja_admin_ads_error_slot(inputs)
	return en_admin_ads_error_slot(inputs)
});
