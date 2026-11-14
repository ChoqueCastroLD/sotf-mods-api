/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_TitleInputs */

const en_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const es_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const de_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const fr_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const it_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const nl_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const pl_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const pt_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const ru_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const sv_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const tr_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const zh_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

const ja_admin_traffic_manager_title = /** @type {(inputs: Admin_Traffic_Manager_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SotF Mods Manager`)
};

/**
* | output |
* | --- |
* | "SotF Mods Manager" |
*
* @param {Admin_Traffic_Manager_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_title = /** @type {((inputs?: Admin_Traffic_Manager_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_title(inputs)
	if (locale === "de") return de_admin_traffic_manager_title(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_title(inputs)
	if (locale === "it") return it_admin_traffic_manager_title(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_title(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_title(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_title(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_title(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_title(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_title(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_title(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_title(inputs)
	return en_admin_traffic_manager_title(inputs)
});
