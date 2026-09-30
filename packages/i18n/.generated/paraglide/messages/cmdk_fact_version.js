/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Fact_VersionInputs */

const en_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Latest version`)
};

const es_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última versión`)
};

const de_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neueste Version`)
};

const fr_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dernière version`)
};

const it_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ultima versione`)
};

const nl_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Laatste versie`)
};

const pl_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najnowsza wersja`)
};

const pt_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Última versão`)
};

const ru_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Последняя версия`)
};

const sv_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senaste version`)
};

const tr_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son sürüm`)
};

const zh_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新版本`)
};

const ja_cmdk_fact_version = /** @type {(inputs: Cmdk_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新バージョン`)
};

/**
* | output |
* | --- |
* | "Latest version" |
*
* @param {Cmdk_Fact_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_fact_version = /** @type {((inputs?: Cmdk_Fact_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Fact_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_fact_version(inputs)
	if (locale === "de") return de_cmdk_fact_version(inputs)
	if (locale === "fr") return fr_cmdk_fact_version(inputs)
	if (locale === "it") return it_cmdk_fact_version(inputs)
	if (locale === "nl") return nl_cmdk_fact_version(inputs)
	if (locale === "pl") return pl_cmdk_fact_version(inputs)
	if (locale === "pt") return pt_cmdk_fact_version(inputs)
	if (locale === "ru") return ru_cmdk_fact_version(inputs)
	if (locale === "sv") return sv_cmdk_fact_version(inputs)
	if (locale === "tr") return tr_cmdk_fact_version(inputs)
	if (locale === "zh") return zh_cmdk_fact_version(inputs)
	if (locale === "ja") return ja_cmdk_fact_version(inputs)
	return en_cmdk_fact_version(inputs)
});
