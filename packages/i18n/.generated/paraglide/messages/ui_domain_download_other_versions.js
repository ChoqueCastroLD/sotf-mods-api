/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Download_Other_VersionsInputs */

const en_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Other versions`)
};

const es_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otras versiones`)
};

const de_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere Versionen`)
};

const fr_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres versions`)
};

const it_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altre versioni`)
};

const nl_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andere versies`)
};

const pl_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inne wersje`)
};

const pt_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outras versões`)
};

const ru_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие версии`)
};

const sv_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Andra versioner`)
};

const tr_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer sürümler`)
};

const zh_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`其他版本`)
};

const ja_ui_domain_download_other_versions = /** @type {(inputs: Ui_Domain_Download_Other_VersionsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのバージョン`)
};

/**
* | output |
* | --- |
* | "Other versions" |
*
* @param {Ui_Domain_Download_Other_VersionsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_download_other_versions = /** @type {((inputs?: Ui_Domain_Download_Other_VersionsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Download_Other_VersionsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_download_other_versions(inputs)
	if (locale === "de") return de_ui_domain_download_other_versions(inputs)
	if (locale === "fr") return fr_ui_domain_download_other_versions(inputs)
	if (locale === "it") return it_ui_domain_download_other_versions(inputs)
	if (locale === "nl") return nl_ui_domain_download_other_versions(inputs)
	if (locale === "pl") return pl_ui_domain_download_other_versions(inputs)
	if (locale === "pt") return pt_ui_domain_download_other_versions(inputs)
	if (locale === "ru") return ru_ui_domain_download_other_versions(inputs)
	if (locale === "sv") return sv_ui_domain_download_other_versions(inputs)
	if (locale === "tr") return tr_ui_domain_download_other_versions(inputs)
	if (locale === "zh") return zh_ui_domain_download_other_versions(inputs)
	if (locale === "ja") return ja_ui_domain_download_other_versions(inputs)
	return en_ui_domain_download_other_versions(inputs)
});
