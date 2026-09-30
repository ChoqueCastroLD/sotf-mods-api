/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_VersionInputs */

const en_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_basecamp_compat_version = /** @type {(inputs: Basecamp_Compat_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Basecamp_Compat_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_version = /** @type {((inputs?: Basecamp_Compat_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_version(inputs)
	if (locale === "de") return de_basecamp_compat_version(inputs)
	if (locale === "fr") return fr_basecamp_compat_version(inputs)
	if (locale === "it") return it_basecamp_compat_version(inputs)
	if (locale === "nl") return nl_basecamp_compat_version(inputs)
	if (locale === "pl") return pl_basecamp_compat_version(inputs)
	if (locale === "pt") return pt_basecamp_compat_version(inputs)
	if (locale === "ru") return ru_basecamp_compat_version(inputs)
	if (locale === "sv") return sv_basecamp_compat_version(inputs)
	if (locale === "tr") return tr_basecamp_compat_version(inputs)
	if (locale === "zh") return zh_basecamp_compat_version(inputs)
	if (locale === "ja") return ja_basecamp_compat_version(inputs)
	return en_basecamp_compat_version(inputs)
});
