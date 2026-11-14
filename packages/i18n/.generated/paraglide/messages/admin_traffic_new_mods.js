/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_New_ModsInputs */

const en_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mods`)
};

const es_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods nuevos`)
};

const de_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods`)
};

const fr_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux mods`)
};

const it_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove mod`)
};

const nl_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mods`)
};

const pl_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe mody`)
};

const pt_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos mods`)
};

const ru_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые моды`)
};

const sv_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya moddar`)
};

const tr_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni modlar`)
};

const zh_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模组`)
};

const ja_admin_traffic_new_mods = /** @type {(inputs: Admin_Traffic_New_ModsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい Mod`)
};

/**
* | output |
* | --- |
* | "New mods" |
*
* @param {Admin_Traffic_New_ModsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_new_mods = /** @type {((inputs?: Admin_Traffic_New_ModsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_New_ModsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_new_mods(inputs)
	if (locale === "de") return de_admin_traffic_new_mods(inputs)
	if (locale === "fr") return fr_admin_traffic_new_mods(inputs)
	if (locale === "it") return it_admin_traffic_new_mods(inputs)
	if (locale === "nl") return nl_admin_traffic_new_mods(inputs)
	if (locale === "pl") return pl_admin_traffic_new_mods(inputs)
	if (locale === "pt") return pt_admin_traffic_new_mods(inputs)
	if (locale === "ru") return ru_admin_traffic_new_mods(inputs)
	if (locale === "sv") return sv_admin_traffic_new_mods(inputs)
	if (locale === "tr") return tr_admin_traffic_new_mods(inputs)
	if (locale === "zh") return zh_admin_traffic_new_mods(inputs)
	if (locale === "ja") return ja_admin_traffic_new_mods(inputs)
	return en_admin_traffic_new_mods(inputs)
});
