/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ version: NonNullable<unknown> }} Manager_Fact_VersionInputs */

const en_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version}`)
};

const es_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versión ${i?.version}`)
};

const de_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version}`)
};

const fr_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version}`)
};

const it_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versione ${i?.version}`)
};

const nl_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versie ${i?.version}`)
};

const pl_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wersja ${i?.version}`)
};

const pt_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Versão ${i?.version}`)
};

const ru_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Версия ${i?.version}`)
};

const sv_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Version ${i?.version}`)
};

const tr_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sürüm ${i?.version}`)
};

const zh_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`版本 ${i?.version}`)
};

const ja_manager_fact_version = /** @type {(inputs: Manager_Fact_VersionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`バージョン ${i?.version}`)
};

/**
* | output |
* | --- |
* | "Version {version}" |
*
* @param {Manager_Fact_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_fact_version = /** @type {((inputs: Manager_Fact_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Fact_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_fact_version(inputs)
	if (locale === "de") return de_manager_fact_version(inputs)
	if (locale === "fr") return fr_manager_fact_version(inputs)
	if (locale === "it") return it_manager_fact_version(inputs)
	if (locale === "nl") return nl_manager_fact_version(inputs)
	if (locale === "pl") return pl_manager_fact_version(inputs)
	if (locale === "pt") return pt_manager_fact_version(inputs)
	if (locale === "ru") return ru_manager_fact_version(inputs)
	if (locale === "sv") return sv_manager_fact_version(inputs)
	if (locale === "tr") return tr_manager_fact_version(inputs)
	if (locale === "zh") return zh_manager_fact_version(inputs)
	if (locale === "ja") return ja_manager_fact_version(inputs)
	return en_manager_fact_version(inputs)
});
