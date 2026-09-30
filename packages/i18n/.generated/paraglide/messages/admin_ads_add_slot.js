/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Add_SlotInputs */

const en_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add slot`)
};

const es_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir bloque`)
};

const de_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Block hinzufügen`)
};

const fr_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un bloc`)
};

const it_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi blocco`)
};

const nl_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blok toevoegen`)
};

const pl_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj jednostkę`)
};

const pt_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar bloco`)
};

const ru_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить блок`)
};

const sv_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till plats`)
};

const tr_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan ekle`)
};

const zh_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加广告位`)
};

const ja_admin_ads_add_slot = /** @type {(inputs: Admin_Ads_Add_SlotInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告ユニットを追加`)
};

/**
* | output |
* | --- |
* | "Add slot" |
*
* @param {Admin_Ads_Add_SlotInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_add_slot = /** @type {((inputs?: Admin_Ads_Add_SlotInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Add_SlotInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_add_slot(inputs)
	if (locale === "de") return de_admin_ads_add_slot(inputs)
	if (locale === "fr") return fr_admin_ads_add_slot(inputs)
	if (locale === "it") return it_admin_ads_add_slot(inputs)
	if (locale === "nl") return nl_admin_ads_add_slot(inputs)
	if (locale === "pl") return pl_admin_ads_add_slot(inputs)
	if (locale === "pt") return pt_admin_ads_add_slot(inputs)
	if (locale === "ru") return ru_admin_ads_add_slot(inputs)
	if (locale === "sv") return sv_admin_ads_add_slot(inputs)
	if (locale === "tr") return tr_admin_ads_add_slot(inputs)
	if (locale === "zh") return zh_admin_ads_add_slot(inputs)
	if (locale === "ja") return ja_admin_ads_add_slot(inputs)
	return en_admin_ads_add_slot(inputs)
});
