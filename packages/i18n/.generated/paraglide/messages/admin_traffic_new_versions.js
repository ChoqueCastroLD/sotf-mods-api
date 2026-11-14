/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_New_VersionsInputs */

const en_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New versions`)
};

const es_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versiones nuevas`)
};

const de_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Versionen`)
};

const fr_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouvelles versions`)
};

const it_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove versioni`)
};

const nl_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe versies`)
};

const pl_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe wersje`)
};

const pt_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novas versões`)
};

const ru_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые версии`)
};

const sv_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya versioner`)
};

const tr_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni sürümler`)
};

const zh_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新版本`)
};

const ja_admin_traffic_new_versions = /** @type {(inputs: Admin_Traffic_New_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいバージョン`)
};

/**
* | output |
* | --- |
* | "New versions" |
*
* @param {Admin_Traffic_New_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_new_versions = /** @type {((inputs?: Admin_Traffic_New_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_New_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_new_versions(inputs)
	if (locale === "de") return de_admin_traffic_new_versions(inputs)
	if (locale === "fr") return fr_admin_traffic_new_versions(inputs)
	if (locale === "it") return it_admin_traffic_new_versions(inputs)
	if (locale === "nl") return nl_admin_traffic_new_versions(inputs)
	if (locale === "pl") return pl_admin_traffic_new_versions(inputs)
	if (locale === "pt") return pt_admin_traffic_new_versions(inputs)
	if (locale === "ru") return ru_admin_traffic_new_versions(inputs)
	if (locale === "sv") return sv_admin_traffic_new_versions(inputs)
	if (locale === "tr") return tr_admin_traffic_new_versions(inputs)
	if (locale === "zh") return zh_admin_traffic_new_versions(inputs)
	if (locale === "ja") return ja_admin_traffic_new_versions(inputs)
	return en_admin_traffic_new_versions(inputs)
});
