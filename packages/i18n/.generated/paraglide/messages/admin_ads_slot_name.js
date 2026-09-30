/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Slot_NameInputs */

const en_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Placement`)
};

const es_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ubicación`)
};

const de_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Platzierung`)
};

const fr_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emplacement`)
};

const it_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posizione`)
};

const nl_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plaatsing`)
};

const pl_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Umiejscowienie`)
};

const pt_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posição`)
};

const ru_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Место`)
};

const sv_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Placering`)
};

const tr_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Konum`)
};

const zh_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`位置`)
};

const ja_admin_ads_slot_name = /** @type {(inputs: Admin_Ads_Slot_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`配置`)
};

/**
* | output |
* | --- |
* | "Placement" |
*
* @param {Admin_Ads_Slot_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_slot_name = /** @type {((inputs?: Admin_Ads_Slot_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Slot_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_slot_name(inputs)
	if (locale === "de") return de_admin_ads_slot_name(inputs)
	if (locale === "fr") return fr_admin_ads_slot_name(inputs)
	if (locale === "it") return it_admin_ads_slot_name(inputs)
	if (locale === "nl") return nl_admin_ads_slot_name(inputs)
	if (locale === "pl") return pl_admin_ads_slot_name(inputs)
	if (locale === "pt") return pt_admin_ads_slot_name(inputs)
	if (locale === "ru") return ru_admin_ads_slot_name(inputs)
	if (locale === "sv") return sv_admin_ads_slot_name(inputs)
	if (locale === "tr") return tr_admin_ads_slot_name(inputs)
	if (locale === "zh") return zh_admin_ads_slot_name(inputs)
	if (locale === "ja") return ja_admin_ads_slot_name(inputs)
	return en_admin_ads_slot_name(inputs)
});
