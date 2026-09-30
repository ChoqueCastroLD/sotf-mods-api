/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_VersionInputs */

const en_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_mod_fact_version = /** @type {(inputs: Mod_Fact_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Mod_Fact_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_version = /** @type {((inputs?: Mod_Fact_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_version(inputs)
	if (locale === "de") return de_mod_fact_version(inputs)
	if (locale === "fr") return fr_mod_fact_version(inputs)
	if (locale === "it") return it_mod_fact_version(inputs)
	if (locale === "nl") return nl_mod_fact_version(inputs)
	if (locale === "pl") return pl_mod_fact_version(inputs)
	if (locale === "pt") return pt_mod_fact_version(inputs)
	if (locale === "ru") return ru_mod_fact_version(inputs)
	if (locale === "sv") return sv_mod_fact_version(inputs)
	if (locale === "tr") return tr_mod_fact_version(inputs)
	if (locale === "zh") return zh_mod_fact_version(inputs)
	if (locale === "ja") return ja_mod_fact_version(inputs)
	return en_mod_fact_version(inputs)
});
