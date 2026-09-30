/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Download_All_VersionsInputs */

const en_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All versions`)
};

const es_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas las versiones`)
};

const de_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Versionen`)
};

const fr_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les versions`)
};

const it_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutte le versioni`)
};

const nl_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle versies`)
};

const pl_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie wersje`)
};

const pt_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todas as versões`)
};

const ru_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все версии`)
};

const sv_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla versioner`)
};

const tr_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm sürümler`)
};

const zh_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部版本`)
};

const ja_ui_domain_download_all_versions = /** @type {(inputs: Ui_Domain_Download_All_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのバージョン`)
};

/**
* | output |
* | --- |
* | "All versions" |
*
* @param {Ui_Domain_Download_All_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_all_versions = /** @type {((inputs?: Ui_Domain_Download_All_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_All_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_all_versions(inputs)
	if (locale === "de") return de_ui_domain_download_all_versions(inputs)
	if (locale === "fr") return fr_ui_domain_download_all_versions(inputs)
	if (locale === "it") return it_ui_domain_download_all_versions(inputs)
	if (locale === "nl") return nl_ui_domain_download_all_versions(inputs)
	if (locale === "pl") return pl_ui_domain_download_all_versions(inputs)
	if (locale === "pt") return pt_ui_domain_download_all_versions(inputs)
	if (locale === "ru") return ru_ui_domain_download_all_versions(inputs)
	if (locale === "sv") return sv_ui_domain_download_all_versions(inputs)
	if (locale === "tr") return tr_ui_domain_download_all_versions(inputs)
	if (locale === "zh") return zh_ui_domain_download_all_versions(inputs)
	if (locale === "ja") return ja_ui_domain_download_all_versions(inputs)
	return en_ui_domain_download_all_versions(inputs)
});
