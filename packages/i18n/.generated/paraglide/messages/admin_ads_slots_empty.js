/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ads_Slots_EmptyInputs */

const en_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No slots.`)
};

const es_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay bloques.`)
};

const de_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Blöcke.`)
};

const fr_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun bloc.`)
};

const it_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun blocco.`)
};

const nl_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen blokken.`)
};

const pl_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak jednostek.`)
};

const pt_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum bloco.`)
};

const ru_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Блоков нет.`)
};

const sv_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga platser.`)
};

const tr_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alan yok.`)
};

const zh_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有广告位。`)
};

const ja_admin_ads_slots_empty = /** @type {(inputs: Admin_Ads_Slots_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`広告ユニットはありません。`)
};

/**
* | output |
* | --- |
* | "No slots." |
*
* @param {Admin_Ads_Slots_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ads_slots_empty = /** @type {((inputs?: Admin_Ads_Slots_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ads_Slots_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ads_slots_empty(inputs)
	if (locale === "de") return de_admin_ads_slots_empty(inputs)
	if (locale === "fr") return fr_admin_ads_slots_empty(inputs)
	if (locale === "it") return it_admin_ads_slots_empty(inputs)
	if (locale === "nl") return nl_admin_ads_slots_empty(inputs)
	if (locale === "pl") return pl_admin_ads_slots_empty(inputs)
	if (locale === "pt") return pt_admin_ads_slots_empty(inputs)
	if (locale === "ru") return ru_admin_ads_slots_empty(inputs)
	if (locale === "sv") return sv_admin_ads_slots_empty(inputs)
	if (locale === "tr") return tr_admin_ads_slots_empty(inputs)
	if (locale === "zh") return zh_admin_ads_slots_empty(inputs)
	if (locale === "ja") return ja_admin_ads_slots_empty(inputs)
	return en_admin_ads_slots_empty(inputs)
});
