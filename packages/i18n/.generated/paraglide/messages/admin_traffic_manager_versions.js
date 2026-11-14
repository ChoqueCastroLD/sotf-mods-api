/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_Manager_VersionsInputs */

const en_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions in use`)
};

const es_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones en uso`)
};

const de_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genutzte Versionen`)
};

const fr_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versions utilisées`)
};

const it_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioni in uso`)
};

const nl_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikte versies`)
};

const pl_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używane wersje`)
};

const pt_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versões em uso`)
};

const ru_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используемые версии`)
};

const sv_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versioner som används`)
};

const tr_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanılan sürümler`)
};

const zh_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用中的版本`)
};

const ja_admin_traffic_manager_versions = /** @type {(inputs: Admin_Traffic_Manager_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用中のバージョン`)
};

/**
* | output |
* | --- |
* | "Versions in use" |
*
* @param {Admin_Traffic_Manager_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_manager_versions = /** @type {((inputs?: Admin_Traffic_Manager_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_Manager_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_manager_versions(inputs)
	if (locale === "de") return de_admin_traffic_manager_versions(inputs)
	if (locale === "fr") return fr_admin_traffic_manager_versions(inputs)
	if (locale === "it") return it_admin_traffic_manager_versions(inputs)
	if (locale === "nl") return nl_admin_traffic_manager_versions(inputs)
	if (locale === "pl") return pl_admin_traffic_manager_versions(inputs)
	if (locale === "pt") return pt_admin_traffic_manager_versions(inputs)
	if (locale === "ru") return ru_admin_traffic_manager_versions(inputs)
	if (locale === "sv") return sv_admin_traffic_manager_versions(inputs)
	if (locale === "tr") return tr_admin_traffic_manager_versions(inputs)
	if (locale === "zh") return zh_admin_traffic_manager_versions(inputs)
	if (locale === "ja") return ja_admin_traffic_manager_versions(inputs)
	return en_admin_traffic_manager_versions(inputs)
});
