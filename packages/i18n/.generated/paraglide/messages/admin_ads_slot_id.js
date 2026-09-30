/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Slot_IdInputs */

const en_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slot ID`)
};

const es_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del bloque`)
};

const de_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Block-ID`)
};

const fr_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID du bloc`)
};

const it_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID del blocco`)
};

const nl_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blok-ID`)
};

const pl_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID jednostki`)
};

const pt_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID do bloco`)
};

const ru_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ID блока`)
};

const sv_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plats-ID`)
};

const tr_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan kimliği`)
};

const zh_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`广告位 ID`)
};

const ja_admin_ads_slot_id = /** @type {(inputs: Admin_Ads_Slot_IdInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユニット ID`)
};

/**
* | output |
* | --- |
* | "Slot ID" |
*
* @param {Admin_Ads_Slot_IdInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_slot_id = /** @type {((inputs?: Admin_Ads_Slot_IdInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Slot_IdInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_slot_id(inputs)
	if (locale === "de") return de_admin_ads_slot_id(inputs)
	if (locale === "fr") return fr_admin_ads_slot_id(inputs)
	if (locale === "it") return it_admin_ads_slot_id(inputs)
	if (locale === "nl") return nl_admin_ads_slot_id(inputs)
	if (locale === "pl") return pl_admin_ads_slot_id(inputs)
	if (locale === "pt") return pt_admin_ads_slot_id(inputs)
	if (locale === "ru") return ru_admin_ads_slot_id(inputs)
	if (locale === "sv") return sv_admin_ads_slot_id(inputs)
	if (locale === "tr") return tr_admin_ads_slot_id(inputs)
	if (locale === "zh") return zh_admin_ads_slot_id(inputs)
	if (locale === "ja") return ja_admin_ads_slot_id(inputs)
	return en_admin_ads_slot_id(inputs)
});
