/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_VersionInputs */

const en_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_ui_domain_versions_col_version = /** @type {(inputs: Ui_Domain_Versions_Col_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Ui_Domain_Versions_Col_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_version = /** @type {((inputs?: Ui_Domain_Versions_Col_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_version(inputs)
	if (locale === "de") return de_ui_domain_versions_col_version(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_version(inputs)
	if (locale === "it") return it_ui_domain_versions_col_version(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_version(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_version(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_version(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_version(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_version(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_version(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_version(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_version(inputs)
	return en_ui_domain_versions_col_version(inputs)
});
