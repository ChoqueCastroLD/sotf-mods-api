/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_SlotsInputs */

const en_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ad slots`)
};

const es_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bloques de anuncios`)
};

const de_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigenblöcke`)
};

const fr_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blocs d’annonces`)
};

const it_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blocchi di annunci`)
};

const nl_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Advertentieblokken`)
};

const pl_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jednostki reklamowe`)
};

const pt_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blocos de anúncio`)
};

const ru_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рекламные блоки`)
};

const sv_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annonsplatser`)
};

const tr_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reklam alanları`)
};

const zh_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告位`)
};

const ja_admin_ads_slots = /** @type {(inputs: Admin_Ads_SlotsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告ユニット`)
};

/**
* | output |
* | --- |
* | "Ad slots" |
*
* @param {Admin_Ads_SlotsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_slots = /** @type {((inputs?: Admin_Ads_SlotsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_SlotsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_slots(inputs)
	if (locale === "de") return de_admin_ads_slots(inputs)
	if (locale === "fr") return fr_admin_ads_slots(inputs)
	if (locale === "it") return it_admin_ads_slots(inputs)
	if (locale === "nl") return nl_admin_ads_slots(inputs)
	if (locale === "pl") return pl_admin_ads_slots(inputs)
	if (locale === "pt") return pt_admin_ads_slots(inputs)
	if (locale === "ru") return ru_admin_ads_slots(inputs)
	if (locale === "sv") return sv_admin_ads_slots(inputs)
	if (locale === "tr") return tr_admin_ads_slots(inputs)
	if (locale === "zh") return zh_admin_ads_slots(inputs)
	if (locale === "ja") return ja_admin_ads_slots(inputs)
	return en_admin_ads_slots(inputs)
});
